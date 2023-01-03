import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const ForgotPasswordScreen = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ScrollView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <ImageBackground
            source={require("../../../../assets/images/topbg.png")}
            resizeMode="cover"
            style={{ height: 210, padding: SIZES.extraLarge }}
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: 34,
                  color: COLORS.white,
                }}
              >
                Forgot Password
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: 22,
                  color: COLORS.white,
                }}
              >
                Fill your number and set a new password!
              </Text>
            </View>
          </ImageBackground>

          <View style={{ alignItems: "center", padding: SIZES.extraLarge }}>
            <Image
              source={require("../../../../assets/images/forgot.png")}
              style={{ width: 300, height: 300 }}
            />
          </View>

          <View style={{ padding: SIZES.medium }}>
            <Text
              style={{
                paddingVertical: SIZES.base,
                fontFamily: FONTS.semiBold,
              }}
            >
              Phone Number
            </Text>
            <View
              style={{
                backgroundColor: "#98989F30",
                padding: SIZES.small,
                borderRadius: SIZES.base,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="Enter registered phone number"
                style={{ fontFamily: FONTS.regular, width: "80%" }}
              />
              <Ionicons
                name="ios-phone-portrait-outline"
                size={24}
                color={COLORS.primary}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-end",
            padding: SIZES.medium,
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
            onPress={() => navigation.navigate("OTP")}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                textTransform: "uppercase",
              }}
            >
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
