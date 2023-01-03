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

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const OtpScreen = ({ navigation }) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

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
                OTP
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: 22,
                  color: COLORS.white,
                }}
              >
                OTP sent via SMS!
              </Text>
            </View>
          </ImageBackground>
          <View style={{ alignItems: "center", padding: SIZES.extraLarge }}>
            <Image
              source={require("../../../../assets/images/otp.png")}
              style={{ width: 300, height: 300 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingHorizontal: SIZES.medium,
            }}
          >
            <View
              style={{
                backgroundColor: "#98989F30",
                padding: SIZES.small,
                borderRadius: SIZES.base,
                width: "23%",
                alignItems: "center",
              }}
            >
              <TextInput style={{ fontFamily: FONTS.regular }} maxLength={1} />
            </View>

            <View
              style={{
                backgroundColor: "#98989F30",
                padding: SIZES.small,
                borderRadius: SIZES.base,
                width: "23%",
                alignItems: "center",
              }}
            >
              <TextInput style={{ fontFamily: FONTS.regular }} maxLength={1} />
            </View>

            <View
              style={{
                backgroundColor: "#98989F30",
                padding: SIZES.small,
                borderRadius: SIZES.base,
                width: "23%",
                alignItems: "center",
              }}
            >
              <TextInput style={{ fontFamily: FONTS.regular }} maxLength={1} />
            </View>

            <View
              style={{
                backgroundColor: "#98989F30",
                padding: SIZES.small,
                borderRadius: SIZES.base,
                width: "23%",
                alignItems: "center",
              }}
            >
              <TextInput style={{ fontFamily: FONTS.regular }} maxLength={1} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: SIZES.medium,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
                color: COLORS.gray,
              }}
            >
              Didn't receive OTP?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.medium,
                  color: COLORS.primary,
                  marginLeft: SIZES.base,
                }}
              >
                Resend
              </Text>
            </TouchableOpacity>
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
            onPress={() => navigation.navigate("Reset")}
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

export default OtpScreen;
