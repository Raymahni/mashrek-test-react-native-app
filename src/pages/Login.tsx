import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import Select from "../components/BaseSelect";
import { validateUsername } from "../utils/validation";
import "../i18n";
import { useTranslation } from "react-i18next";
import BaseLanguageSwitcher from "../components/BaseLanguageSwitcher";
import { storeUsernameSecurely } from "../utils/secure";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("UAE");
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const handleLogin = () => {
    const validationMessage = validateUsername(username, country);
    if (!username || !password) {
      Alert.alert("Please enter username and password");
      alert("Please enter username and password");
    } else if (validationMessage) {
      Alert.alert("Validation Error", validationMessage);
      alert(validationMessage);
    } else {
      storeUsernameSecurely(username);
      Alert.alert(
        "Login Button Pressed",
        `Username: ${username}\nPassword: ${password}`
      );
      alert(
        `Login Button Pressed - Username: ${username}\nPassword: ${password}`
      );
      navigation.navigate("Username");
    }
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
    setValidationMessage(validateUsername(text, country));
  };

  return (
    <View style={styles.container}>
      <BaseLanguageSwitcher />

      {/* <Text style={styles[t("theme")]}>{t("welcome")}</Text> */}
      <Text style={[styles.title, styles[t("theme")]]}>{t("welcome")}</Text>

      <Select
        label={t("select_country")}
        selectedValue={country}
        onValueChange={setCountry}
        options={[
          { label: "UAE", value: "UAE" },
          { label: "India", value: "India" },
          { label: "USA", value: "USA" },
          { label: "Nigeria", value: "Nigeria" },
        ]}
      />

      <BaseInput
        placeholder="username"
        value={username}
        label={t("username")}
        onChangeText={handleUsernameChange}
      />
      {validationMessage && (
        <Text style={styles.error}>{validationMessage}</Text>
      )}

      <BaseInput
        placeholder="********"
        value={password}
        label={t("password")}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <BaseButton title={t("login")} onPress={handleLogin} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    width: "100%",
  },
  error: {
    color: "red",
    marginVertical: 5,
  },
  en: {
    backgroundColor: 'green',
  },
  es: {
    backgroundColor: 'red',
  },
  fr: {
    backgroundColor: 'blue',
  }
});

export default Login;
