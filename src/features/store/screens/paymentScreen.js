import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const PaymentScreen = ({ navigation }) => {
  const [value, setValue] = useState("cash");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.extraLarge,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: 100,
          }}
        >
          <Ionicons name="md-location-outline" size={18} color={COLORS.white} />
        </View>
        <View
          style={{
            height: 1,
            width: "20%",
            borderRadius: 1,
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderStyle: "dotted",
          }}
        />
        <View
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: 100,
          }}
        >
          <FontAwesome name="credit-card" size={18} color={COLORS.white} />
        </View>
        <View
          style={{
            height: 1,
            width: "20%",
            borderRadius: 1,
            borderWidth: 1,
            borderColor: COLORS.gray,
            borderStyle: "dotted",
          }}
        />
        <View
          style={{
            borderColor: COLORS.gray,
            borderWidth: 1,
            padding: SIZES.small,
            borderRadius: 100,
          }}
        >
          <Ionicons
            name="ios-checkmark-outline"
            size={18}
            color={COLORS.gray}
          />
        </View>
      </View>

      <View style={{ marginTop: SIZES.extraLarge, marginBottom: SIZES.medium }}>
        <Text style={{ fontFamily: FONTS.semiBold }}>Payment Method</Text>
      </View>
      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View
            style={{
              backgroundColor: "#98989F20",
              flexDirection: "row",
              padding: SIZES.medium,
              borderRadius: SIZES.base,
              marginVertical: SIZES.base,
            }}
          >
            <RadioButton
              value="cash"
              color={COLORS.primary}
              uncheckedColor={COLORS.gray}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: SIZES.medium,
              }}
            >
              <Image
                source={require("../../../../assets/images/cash.png")}
                style={{ width: 35, height: 35 }}
              />
              <Text
                style={{ fontFamily: FONTS.medium, marginLeft: SIZES.base }}
              >
                Cash on delivery
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#98989F20",
              flexDirection: "row",
              padding: SIZES.medium,
              borderRadius: SIZES.base,
              marginVertical: SIZES.base,
            }}
          >
            <RadioButton
              value="credit"
              color={COLORS.primary}
              uncheckedColor={COLORS.gray}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: SIZES.medium,
              }}
            >
              <Image
                source={require("../../../../assets/images/credit.png")}
                style={{ width: 35, height: 35 }}
              />
              <Text
                style={{ fontFamily: FONTS.medium, marginLeft: SIZES.base }}
              >
                Visa/Mastercard
              </Text>
            </View>
          </View>
        </RadioButton.Group>
        <View style={{ marginTop: SIZES.large, marginBottom: SIZES.base }}>
          <Text
            style={{ fontFamily: FONTS.semiBold, marginBottom: SIZES.base }}
          >
            Order notes (optional)
          </Text>
          <View
            style={{
              backgroundColor: "#98989F30",
              padding: SIZES.base,
              borderRadius: SIZES.base,
              marginVertical: SIZES.base,
            }}
          >
            <TextInput
              multiline
              numberOfLines={4}
              style={{ padding: 10, fontFamily: FONTS.regular }}
              placeholder="Notes about your order, e.g. special notes for delivery"
              placeholderTextColor={COLORS.gray}
            />
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
            marginVertical: SIZES.base,
          }}
          onPress={() => navigation.navigate("ConfirmOrderScreen")}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
