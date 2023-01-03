import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const PaymentOptionScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.light,
        padding: SIZES.medium,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
            My Cards
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddCardScreen")}
          >
            <MaterialIcons
              name="add-circle-outline"
              size={24}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              source={require("../../../../assets/images/Card1.png")}
              style={{ width: 300, height: 230 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Image
              source={require("../../../../assets/images/Card2.png")}
              style={{
                marginHorizontal: SIZES.medium,
                width: 300,
                height: 230,
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Image
              source={require("../../../../assets/images/Card3.png")}
              style={{ width: 300, height: 230 }}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: SIZES.base,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
            Other Payment Option
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#98989F30",
              borderRadius: SIZES.base,
              padding: SIZES.base,
              marginTop: SIZES.large,
            }}
          >
            <View
              style={{
                padding: SIZES.base,
                backgroundColor: "#98989F30",
                borderRadius: SIZES.base,
              }}
            >
              <Image
                source={require("../../../../assets/images/paypal.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ fontFamily: FONTS.medium }}>Paypal</Text>
              <Text style={{ fontFamily: FONTS.regular }}>
                MyPaypal@gmail.com
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#98989F30",
              borderRadius: SIZES.base,
              padding: SIZES.base,
              marginTop: SIZES.large,
            }}
          >
            <View
              style={{
                padding: SIZES.base,
                backgroundColor: "#98989F30",
                borderRadius: SIZES.base,
              }}
            >
              <Image
                source={require("../../../../assets/images/cash.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ fontFamily: FONTS.medium }}>Cash On Delivery</Text>
              <Text style={{ fontFamily: FONTS.regular }}>Pay in Cash</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#98989F30",
              borderRadius: SIZES.base,
              padding: SIZES.base,
              marginTop: SIZES.large,
            }}
          >
            <View
              style={{
                padding: SIZES.base,
                backgroundColor: "#98989F30",
                borderRadius: SIZES.base,
              }}
            >
              <Image
                source={require("../../../../assets/images/apple-pay.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ fontFamily: FONTS.medium }}>Apple Pay</Text>
              <Text style={{ fontFamily: FONTS.regular }}>
                MyApplePay@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentOptionScreen;
