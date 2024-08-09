import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { retrieveUsernameSecurely } from "../utils/secure";

const UserDataScreen: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const loadUsername = async () => {
      const storedUsername = await retrieveUsernameSecurely();
      setUsername(storedUsername);
    };

    loadUsername();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Stored Username:</Text>
      {username ? (
        <Text style={styles.username}>{username}</Text>
      ) : (
        <Text style={styles.noUsername}>No username stored.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noUsername: {
    fontSize: 14,
    fontStyle: "italic",
    color: "gray",
  },
});

export default UserDataScreen;
