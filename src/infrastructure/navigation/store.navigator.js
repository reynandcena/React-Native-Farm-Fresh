import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { FONTS, SIZES } from "../theme/constants";
import StoreScreen from "../../features/store/screens/storeScreen";
import LocationScreen from "../../features/store/screens/locationScreen";
import MapScreen from "../../features/store/screens/mapScreen";
import NotificationScreen from "../../features/store/screens/notificationScreen";
import CartScreen from "../../features/store/screens/cartScreen";
import CheckoutScreen from "../../features/store/screens/checkoutScreen";
import PaymentScreen from "../../features/store/screens/paymentScreen";
import ConfirmOrderScreen from "../../features/store/screens/confirmOrderScreen";
import OrderSuccessScreen from "../../features/store/screens/orderSuccessScreen";
import CategoryScreen from "../../features/store/screens/categoryScreen";
import PostsScreen from "../../features/store/screens/postsScreen";
import ProductScreen from "../../features/store/screens/productScreen";
import SinglePostScreen from "../../features/store/screens/singlePostScreen";

const StoreNavigator = () => {
  const Store = createStackNavigator();
  return (
    <Store.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <Store.Screen
        name="Store"
        component={StoreScreen}
        options={{ headerShown: false }}
      />

      <Store.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          headerTitle: "Your Location",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />
      <Store.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerTitle: "Map",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTitle: "Notifications",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: "Cart",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{
          headerTitle: "Delivery Address",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerTitle: "Payment",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="ConfirmOrderScreen"
        component={ConfirmOrderScreen}
        options={{
          headerTitle: "Confirm Order",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="OrderSuccessScreen"
        component={OrderSuccessScreen}
        options={{ headerShown: false }}
      />

      <Store.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerTitle: "Category",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: "Posts",
          headerTitleStyle: {
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          },
        }}
      />

      <Store.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />

      <Store.Screen
        name="SinglePostScreen"
        component={SinglePostScreen}
        options={{ headerShown: false }}
      />
    </Store.Navigator>
  );
};

export default StoreNavigator;
