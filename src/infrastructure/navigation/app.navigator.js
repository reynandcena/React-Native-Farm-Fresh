import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import StoreNavigator from "./store.navigator";
import WishlistScreen from "../../features/wishlist/screens/wishlistScreen";
import OrderScreen from "../../features/order/screens/orderScreen";
import AccountScreen from "../../features/account/screens/accountScreen";
import SearchScreen from "../../features/search/screen/searchScreen";
import SettingsNavigator from "./settings.navigator";
import { FONTS, COLORS, SIZES } from "../theme/constants";

const App = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          elevation: 3,
        },
        tabBarLabelStyle: { fontFamily: FONTS.medium },
      }}
    >
      <App.Screen
        options={{
          tabBarLabel: "Store",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="StoreTab"
        component={StoreNavigator}
      />

      <App.Screen
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={size} color={color} />
          ),
          headerTitle: "Search",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
        name="Search"
        component={SearchScreen}
      />

      <App.Screen
        options={{
          tabBarLabel: "Wishlist",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={size}
              color={color}
            />
          ),
          headerTitle: "Wishlist",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
        name="WishlistTab"
        component={WishlistScreen}
      />

      <App.Screen
        options={{
          tabBarLabel: "Order",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="OrderTab"
        component={OrderScreen}
      />

      <App.Screen
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
        name="AccountTab"
        component={SettingsNavigator}
      />
    </App.Navigator>
  );
};

export default AppNavigator;
