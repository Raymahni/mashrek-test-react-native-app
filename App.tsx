import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/Login";
import Username from "./src/pages/Username";

export type RootStackParamList = {
  Login: undefined;
  Username: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Username" component={Username} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
