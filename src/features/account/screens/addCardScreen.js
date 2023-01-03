import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const AddCardScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        padding: SIZES.medium,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          backgroundColor: "#07B99920",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Ionicons name="md-camera-outline" size={24} color={COLORS.primary} />
        <Text style={{ fontFamily: FONTS.regular, marginVertical: SIZES.base }}>
          Scan Identity Card
        </Text>
      </View>
      <View style={{ marginVertical: SIZES.medium }}>
        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
          >
            Card Name
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
              placeholder="Enter card name"
              style={{ fontFamily: FONTS.regular, width: "100%" }}
            />
          </View>
        </View>
        <View style={{ marginBottom: SIZES.medium }}>
          <Text
            style={{ paddingVertical: SIZES.base, fontFamily: FONTS.semiBold }}
          >
            Card Number
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
              placeholder="Enter card number"
              style={{ fontFamily: FONTS.regular, width: "100%" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginBottom: SIZES.medium }}>
            <Text
              style={{
                paddingVertical: SIZES.base,
                fontFamily: FONTS.semiBold,
              }}
            >
              Expiry Date
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
                placeholder="mm/yy"
                style={{ fontFamily: FONTS.regular, width: "45%" }}
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
              CVV
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
                placeholder="****"
                style={{ fontFamily: FONTS.regular, width: "45%" }}
                secureTextEntry
              />
            </View>
          </View>
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
            Add Credit Card
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
