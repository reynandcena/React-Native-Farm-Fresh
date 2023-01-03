import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../features/access/screens/welcomeScreen";
import LoginScreen from "../../features/access/screens/loginScreen";
import RegisterScreen from "../../features/access/screens/registerScreen";
import ForgotPasswordScreen from "../../features/access/screens/forgotPasswordScreen";
import OtpScreen from "../../features/access/screens/otpScreen";
import ResetScreen from "../../features/access/screens/resetScreen";
import AppNavigator from "./app.navigator";

const Stack = createStackNavigator();

const AccessNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OtpScreen} />
      <Stack.Screen name="Reset" component={ResetScreen} />
      <Stack.Screen name="StoreScreen" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AccessNavigator;
