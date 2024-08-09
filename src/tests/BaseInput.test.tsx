import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BaseInput from "../components/BaseInput";

describe("BaseInput Component", () => {
  test("renders correctly with given props", () => {
    const { getByText, getByPlaceholderText } = render(
      <BaseInput
        label="Username"
        placeholder="Enter your username"
        value=""
        onChangeText={() => {}}
      />
    );

    // This is to check if the label is rendered
    expect(getByText("Username")).toBeTruthy();

    // This is to check if the placeholder is rendered
    expect(getByPlaceholderText("Enter your username")).toBeTruthy();
  });

  test("displays the correct value", () => {
    const { getByDisplayValue } = render(
      <BaseInput
        label="Username"
        placeholder="Enter your username"
        value="testuser"
        onChangeText={() => {}}
      />
    );

    // This is to check if the input displays the correct value
    expect(getByDisplayValue("testuser")).toBeTruthy();
  });

  test("calls onChangeText with correct value", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <BaseInput
        label="Username"
        placeholder="Enter your username"
        value=""
        onChangeText={onChangeTextMock}
      />
    );

    // This is to simulate text input change
    fireEvent.changeText(
      getByPlaceholderText("Enter your username"),
      "new text"
    );

    // This is to check if onChangeText was called with the correct value
    expect(onChangeTextMock).toHaveBeenCalledWith("new text");
  });

  test("applies secureTextEntry prop correctly", () => {
    const { getByPlaceholderText } = render(
      <BaseInput
        label="Password"
        placeholder="Enter your password"
        value=""
        onChangeText={() => {}}
        secureTextEntry={true}
      />
    );

    // This is to check if the secureTextEntry prop is applied
    const input = getByPlaceholderText("Enter your password").props;
    expect(input.secureTextEntry).toBe(true);
  });
});
