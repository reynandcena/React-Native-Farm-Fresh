import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, SIZES, FONTS } from "../../../infrastructure/theme/constants";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.medium,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../../assets/images/grocery.png")}
          style={{ width: 300, height: 300 }}
        />
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: 20 }}>
            Let's get started
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.font,
              textAlign: "center",
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-end",
          marginBottom: SIZES.base,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.medium,
            borderRadius: SIZES.base,
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.large,
            elevation: 3,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: SIZES.medium,
            borderRadius: SIZES.base,
            justifyContent: "center",
            alignItems: "center",
            marginTop: SIZES.large,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              textTransform: "uppercase",
            }}
          >
            Login to Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
