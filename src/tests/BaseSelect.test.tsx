import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BaseSelect from "../components/BaseSelect";

describe("Select Component", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  test("renders correctly with label", () => {
    const { getByText, getAllByTestId } = render(
      <BaseSelect
        selectedValue="1"
        onValueChange={() => {}}
        options={options}
        label="Select an Option"
      />
    );

    // This is to check if the label is rendered
    expect(getByText("Select an Option")).toBeTruthy();
  });

  test("calls onValueChange with correct value when a new option is selected", () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(
      <BaseSelect
        selectedValue="1"
        onValueChange={onValueChangeMock}
        options={options}
        label="Select an Option"
      />
    );

    // This is to simulate changing the picker value
    fireEvent(getByTestId("picker"), "valueChange", "2");

    // This is to check if onValueChange was called with the correct value
    expect(onValueChangeMock).toHaveBeenCalledWith("2");
  });
});
