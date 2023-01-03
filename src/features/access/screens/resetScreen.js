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

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const ResetScreen = ({ navigation }) => {
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
              Reset Password
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: 22,
                color: COLORS.white,
              }}
            >
              Time to build your security!
            </Text>
          </View>
        </ImageBackground>
        <View style={{ alignItems: "center", padding: SIZES.extraLarge }}>
          <Image
            source={require("../../../../assets/images/reset.png")}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.medium,
            marginBottom: SIZES.medium,
          }}
        >
          <Text
            style={{
              paddingVertical: SIZES.base,
              fontFamily: FONTS.semiBold,
            }}
          >
            New Password
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
              placeholder="******"
              style={{ fontFamily: FONTS.regular, width: "80%" }}
              secureTextEntry
            />
            <MaterialIcons
              name="lock-outline"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.medium,
            marginBottom: SIZES.medium,
          }}
        >
          <Text
            style={{
              paddingVertical: SIZES.base,
              fontFamily: FONTS.semiBold,
            }}
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
              placeholder="******"
              style={{ fontFamily: FONTS.regular, width: "80%" }}
              secureTextEntry
            />
            <MaterialCommunityIcons
              name="lock-check-outline"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "flex-end",
            paddingHorizontal: SIZES.medium,
            marginBottom: SIZES.medium,
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
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                textTransform: "uppercase",
              }}
            >
              Reset Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetScreen;
