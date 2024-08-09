# Overview
This React Native mobile app is part of a cross-platform solution designed for a global audience. The app allows users to register and authenticate themselves with country-specific username validation rules, supports localization, and offers a theming system based on the selected country. The app also securely stores user data and integrates with native modules to enhance functionality.

# Features
User Registration & Login
Country-Specific Username Validation
Localization:

# Supported Languages: English, Spanish, French.
Users can select their preferred language.


# Country-Based Theming:
The app theme changes based on the user's selected country.
Global Features

# Security
Secure Storage:
Usernames and other sensitive data are stored securely on the device.
User Data Display:
Securely displays stored user information.

# Testing
Unit & Functional Testing:
Comprehensive tests cover all critical functionality and validation rules.
Installation

# Clone the repository:
git clone https://github.com/Raymahni/mashrek-test-react-native-app
cd mashrek-test-react-native-app

# Install dependencies:
npm install

#  Run the app:
For iOS: npx expo start --ios
For Android: npx expo start --android

# File Structure
/src/components: Reusable components used throughout the app.
/src/screens: Screen components for registration, login, and other functionalities.
/src/utils: Utility functions, validation rules, and other helpers.
/src/i18n: Localization configuration and language files.

# Documentation
Readme.md: This document

# Testing
Run tests using:
npm test


# Note
Had some trouble running the mobile version of the app on expo go, with a little more time would have sorted that out.
