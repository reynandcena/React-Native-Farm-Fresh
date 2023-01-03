import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const AccountInformationScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        padding: SIZES.medium,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
          >
            Full name
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
              defaultValue="Reynan Decena"
              style={{ fontFamily: FONTS.regular }}
            />
            <Feather name="user" size={24} color={COLORS.primary} />
          </View>
        </View>

        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
          >
            Email address
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
              defaultValue="reynandecena1984@gmail.com"
              style={{ fontFamily: FONTS.regular }}
            />
            <MaterialIcons
              name="alternate-email"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>

        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
          >
            Contact number
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
              defaultValue="+63 9665349297"
              style={{ fontFamily: FONTS.regular }}
            />
            <MaterialCommunityIcons
              name="cellphone"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>
        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
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
              defaultValue="+63 9665349297"
              style={{ fontFamily: FONTS.regular }}
              secureTextEntry
            />
            <MaterialIcons
              name="lock-outline"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>

        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
          >
            Confirm Password
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
              defaultValue="+63 9665349297"
              style={{ fontFamily: FONTS.regular }}
              secureTextEntry
            />
            <MaterialCommunityIcons
              name="lock-check-outline"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: SIZES.medium,
              borderRadius: SIZES.base,
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.large,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                textTransform: "uppercase",
              }}
            >
              Update Information
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountInformationScreen;
