import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import AllOrders from "../components/allOrders";
import ActiveOrders from "../components/activeOrders";
import PastOrders from "../components/pastOrder";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const Tab = createMaterialTopTabNavigator();

const OrderScreen = ({ navigation }) => {
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.medium,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 32 }}
          onPress={() => navigation.navigate("StoreTab")}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.dark,
          }}
        >
          Orders
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
          },
          tabBarStyle: { backgroundColor: COLORS.white },
          tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
        }}
      >
        <Tab.Screen
          name="AllOrders"
          component={AllOrders}
          options={{
            title: "All Orders",
          }}
        />
        <Tab.Screen
          name="ActiveOrders"
          component={ActiveOrders}
          options={{
            title: "Active Orders",
          }}
        />
        <Tab.Screen
          name="PastOrders"
          component={PastOrders}
          options={{
            title: "Past Orders",
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default OrderScreen;
