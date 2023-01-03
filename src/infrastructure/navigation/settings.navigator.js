import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { FONTS, SIZES } from "../theme/constants";
import AccountScreen from "../../features/account/screens/accountScreen";
import CameraScreen from "../../features/account/screens/cameraScreen";
import AccountInformationScreen from "../../features/account/screens/accountInformationScreen";
import PaymentOptionScreen from "../../features/account/screens/paymentOptionScreen";
import AddCardScreen from "../../features/account/screens/addCardScreen";
import NotificationScreen from "../../features/account/screens/notificationScreen";
import SecurityScreen from "../../features/account/screens/securityScreen";

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Account"
        component={AccountScreen}
      />

      <SettingsStack.Screen
        name="AccountInfo"
        component={AccountInformationScreen}
        options={{
          headerTitle: "Account Information",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <SettingsStack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{
          headerTitle: "Add New Card",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <SettingsStack.Screen
        name="PaymentOption"
        component={PaymentOptionScreen}
        options={{
          headerTitle: "Payment Options",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <SettingsStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTitle: "Notification Settings",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <SettingsStack.Screen
        name="SecurityScreen"
        component={SecurityScreen}
        options={{
          headerTitle: "Security Settings",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
