import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View, Alert } from "react-native";
import BaseButton from "./BaseButton";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <BaseButton title="English" onPress={() => changeLanguage("en")} />
      </View>
      <View style={styles.box}>
        <BaseButton title="Español" onPress={() => changeLanguage("es")} />
      </View>
      <View style={styles.box}>
        <BaseButton title="Français" onPress={() => changeLanguage("fr")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LanguageSwitcher;
