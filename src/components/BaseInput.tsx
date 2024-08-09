import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TextInputProps,
} from "react-native";

interface BaseInputProps extends TextInputProps {
  placeholder?: string;
  value: string;
  label: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const BaseInput: React.FC<BaseInputProps> = ({
  placeholder,
  value,
  label,
  onChangeText,
  secureTextEntry,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    marginBottom: 2,
  },
});

export default BaseInput;
