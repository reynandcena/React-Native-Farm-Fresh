import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ScrollView>
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
              Sign Up
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 22,
                color: COLORS.white,
              }}
            >
              Fill the details and enjoy shopping!
            </Text>
          </View>
        </ImageBackground>
        <View style={{ margin: SIZES.medium }}>
          <View style={{ marginBottom: SIZES.medium }}>
            <Text
              style={{
                paddingVertical: SIZES.base,
                fontFamily: FONTS.semiBold,
              }}
            >
              Full Name
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
                placeholder="Enter full name"
                style={{ fontFamily: FONTS.regular, width: "80%" }}
              />
              <Feather name="user" size={24} color={COLORS.primary} />
            </View>
          </View>
          <View style={{ marginBottom: SIZES.medium }}>
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
                placeholder="Enter phone number"
                style={{ fontFamily: FONTS.regular, width: "80%" }}
              />
              <Ionicons
                name="ios-phone-portrait-outline"
                size={24}
                color={COLORS.primary}
              />
            </View>
          </View>
          <View style={{ marginBottom: SIZES.medium }}>
            <Text
              style={{
                paddingVertical: SIZES.base,
                fontFamily: FONTS.semiBold,
              }}
            >
              Password
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
                placeholder="*******"
                style={{ fontFamily: FONTS.regular, width: "80%" }}
              />
              <Ionicons
                name="md-lock-closed-outline"
                size={24}
                color={COLORS.primary}
              />
            </View>
          </View>
          <View style={{ marginBottom: SIZES.medium }}>
            <Text
              style={{
                paddingVertical: SIZES.base,
                fontFamily: FONTS.semiBold,
              }}
            >
              Re-Enter Password
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
                placeholder="*******"
                style={{ fontFamily: FONTS.regular, width: "80%" }}
              />
              <Ionicons
                name="md-lock-closed-outline"
                size={24}
                color={COLORS.primary}
              />
            </View>
          </View>

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
            onPress={() => navigation.navigate("StoreScreen")}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                textTransform: "uppercase",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: SIZES.extraLarge,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{ width: "45%", height: 1, backgroundColor: COLORS.gray }}
            />
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                textTransform: "uppercase",
                color: COLORS.gray,
              }}
            >
              Or
            </Text>
            <View
              style={{ width: "45%", height: 1, backgroundColor: COLORS.gray }}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.light,
                padding: SIZES.medium,
                borderRadius: SIZES.base,
                marginHorizontal: SIZES.base,
              }}
            >
              <Image
                source={require("../../../../assets/images/google.png")}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.light,
                padding: SIZES.medium,
                borderRadius: SIZES.base,
                marginHorizontal: SIZES.base,
              }}
            >
              <Image
                source={require("../../../../assets/images/facebook.png")}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-end",
            marginVertical: SIZES.medium,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
                color: COLORS.gray,
              }}
            >
              Joined us before?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.medium,
                  color: COLORS.primary,
                  marginLeft: SIZES.base,
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
