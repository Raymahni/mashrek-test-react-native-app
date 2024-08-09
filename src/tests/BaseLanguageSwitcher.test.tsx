import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BaseLanguageSwitcher from "../components/BaseLanguageSwitcher";
import { useTranslation } from "react-i18next";

// This is to mock the `useTranslation` hook from `react-i18next`
jest.mock("react-i18next");

describe("LanguageSwitcher Component", () => {
  let changeLanguageMock: any;

  beforeEach(() => {
    // This is to create a fresh mock function before each test
    changeLanguageMock = jest.fn();

    // This is to mock the implementation of useTranslation
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        changeLanguage: changeLanguageMock,
      },
    });
  });

  test("renders correctly with language buttons", () => {
    const { getByText } = render(<BaseLanguageSwitcher />);

    // This is to check if the buttons for each language are rendered
    expect(getByText("English")).toBeTruthy();
    expect(getByText("Español")).toBeTruthy();
    expect(getByText("Français")).toBeTruthy();
  });

  test("calls changeLanguage with correct language code when buttons are pressed", () => {
    const { getByText } = render(<BaseLanguageSwitcher />);

    // This is to simulate pressing each button
    fireEvent.press(getByText("English"));
    expect(changeLanguageMock).toHaveBeenCalledWith("en");

    fireEvent.press(getByText("Español"));
    expect(changeLanguageMock).toHaveBeenCalledWith("es");

    fireEvent.press(getByText("Français"));
    expect(changeLanguageMock).toHaveBeenCalledWith("fr");
  });
});
