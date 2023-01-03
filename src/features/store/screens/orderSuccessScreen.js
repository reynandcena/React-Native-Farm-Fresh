import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const OrderSuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.large,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ width: "100%", height: 250 }}>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="contain"
          source={require("../../../../assets/images/orderCompleted.json")}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{ fontFamily: FONTS.extraBold, fontSize: SIZES.extraLarge }}
        >
          Congrats!
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            marginVertical: SIZES.base,
          }}
        >
          Order has been sent successfully
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: SIZES.base,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
          onPress={() => navigation.navigate("Store")}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            Continue shopping
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccessScreen;
