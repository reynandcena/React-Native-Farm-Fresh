import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import NotificationUpdates from "../components/notificationUpdates";
import NotificationTransactions from "../components/notificationTransactions";

const Tab = createMaterialTopTabNavigator();

const NotificationScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontFamily: FONTS.semiBold, fontSize: SIZES.font },
        tabBarStyle: { backgroundColor: COLORS.white },
        tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
      }}
    >
      <Tab.Screen name="Updates" component={NotificationUpdates} />
      <Tab.Screen name="Transactions" component={NotificationTransactions} />
    </Tab.Navigator>
  );
};

export default NotificationScreen;
