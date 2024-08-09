import * as SecureStore from "expo-secure-store";

// Function to store username securely
export const storeUsernameSecurely = async (username: string) => {
  try {
    await SecureStore.setItemAsync("username", username);
    console.log("Username stored securely");
  } catch (error) {
    console.error("Could not store username securely", error);
  }
};

// Function to retrieve username securely
export const retrieveUsernameSecurely = async () => {
  try {
    const username = await SecureStore.getItemAsync("username");
    if (username) {
      console.log("Username retrieved:", username);
      return username;
    } else {
      console.log("No username stored");
      return null;
    }
  } catch (error) {
    console.error("Could not retrieve username", error);
    return null;
  }
};
