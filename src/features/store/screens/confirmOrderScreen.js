import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const ConfirmOrderScreen = ({ navigation }) => {
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
            backgroundColor: COLORS.primary,
            padding: SIZES.small,
            borderRadius: 100,
          }}
        >
          <Ionicons
            name="ios-checkmark-outline"
            size={18}
            color={COLORS.white}
          />
        </View>
      </View>
      <View style={{ marginTop: SIZES.extraLarge, marginBottom: SIZES.base }}>
        <Text style={{ fontFamily: FONTS.semiBold }}>Address</Text>
      </View>
      <View>
        <Text style={{ fontFamily: FONTS.regular }}>
          58 Rizal St., Poblacion West IV Aliaga, Nueva Ecija
        </Text>
      </View>
      <View style={{ marginTop: SIZES.extraLarge, marginBottom: SIZES.base }}>
        <Text style={{ fontFamily: FONTS.semiBold }}>Payment Method</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
        <Image
          source={require("../../../../assets/images/cash.png")}
          style={{ width: 35, height: 35 }}
        />
        <Text style={{ fontFamily: FONTS.regular, marginLeft: SIZES.base }}>
          Cash on delivery
        </Text>
      </View>
      <View style={{ marginTop: SIZES.extraLarge, marginBottom: SIZES.base }}>
        <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.primary }}>
          Order ID: #221
        </Text>
      </View>
      <View style={{ marginTop: SIZES.base }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.gray }}>
            Sub Total
          </Text>
          <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>
            ₱620.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.gray }}>
            Discount
          </Text>
          <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>
            ₱0.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.gray }}>
            Shipping
          </Text>
          <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>
            ₱58.00
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#98989F30",
            marginVertical: SIZES.base,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ fontFamily: FONTS.bold }}>Total</Text>
          <Text style={{ fontFamily: FONTS.bold }}>₱678.00</Text>
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
            marginVertical: SIZES.extraLarge,
          }}
          onPress={() => navigation.navigate("OrderSuccessScreen")}
        >
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrderScreen;
