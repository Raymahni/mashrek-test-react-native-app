import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BaseButton from "../components/BaseButton";

describe("BaseButton Component", () => {
  test("renders correctly with the provided title", () => {
    const { getByText } = render(
      <BaseButton title="Click Me" onPress={() => {}} />
    );

    // This is to check if the title is rendered correctly
    expect(getByText("Click Me")).toBeTruthy();
  });

  test("calls onPress function when button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <BaseButton title="Click Me" onPress={onPressMock} />
    );

    // This simulates pressing the button
    fireEvent.press(getByText("Click Me"));

    // This is to check if onPressMock was called
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
