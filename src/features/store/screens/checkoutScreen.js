import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const CheckoutScreen = ({ navigation }) => {
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
            borderColor: COLORS.gray,
            borderWidth: 1,
            padding: SIZES.small,
            borderRadius: 100,
          }}
        >
          <FontAwesome name="credit-card" size={18} color={COLORS.gray} />
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

      <View style={{ marginVertical: SIZES.small }}>
        <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}>
          <Card
            style={{
              padding: SIZES.font,
              marginVertical: SIZES.large,
            }}
          >
            <View style={{ marginVertical: SIZES.small, flexDirection: "row" }}>
              <MaterialIcons name="home" size={24} color={COLORS.primary} />
              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ fontFamily: FONTS.semiBold }}>Home</Text>
                <Paragraph
                  style={{
                    fontFamily: FONTS.regular,
                    color: COLORS.gray,
                    width: "80%",
                  }}
                >
                  58 Rizal St., Poblacion West IV Aliaga Nueva Ecija
                </Paragraph>
              </View>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}>
          <Card
            style={{
              padding: SIZES.font,
              marginVertical: SIZES.large,
            }}
          >
            <View style={{ marginVertical: SIZES.small, flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="office-building-outline"
                size={24}
                color={COLORS.primary}
              />
              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ fontFamily: FONTS.semiBold }}>Office</Text>
                <Paragraph
                  style={{
                    fontFamily: FONTS.regular,
                    color: COLORS.gray,
                    width: "80%",
                  }}
                >
                  CRK03 - 2F Newstreet Bldg., Balibago, Angeles City
                </Paragraph>
              </View>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}>
          <Card
            style={{
              padding: SIZES.font,
              marginVertical: SIZES.large,
            }}
          >
            <View style={{ marginVertical: SIZES.small, flexDirection: "row" }}>
              <Entypo name="location" size={24} color={COLORS.primary} />
              <View style={{ marginLeft: SIZES.base }}>
                <Text style={{ fontFamily: FONTS.semiBold }}>Other</Text>
                <Paragraph
                  style={{
                    fontFamily: FONTS.regular,
                    color: COLORS.gray,
                    width: "60%",
                  }}
                >
                  1689 Orchids St., Villa Eusebio San Miguel Pasig City
                </Paragraph>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
