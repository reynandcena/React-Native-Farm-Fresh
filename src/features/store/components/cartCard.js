import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const CartCard = ({
  id,
  imgUrl,
  title,
  rating,
  price,
  salePrice,
  category,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Card
        style={{
          padding: SIZES.small,
          backgroundColor: COLORS.white,
          marginVertical: SIZES.base,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={{
                width: 110,
                height: 110,
                resizeMode: "contain",
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
              }}
            />
            <View style={{ marginLeft: SIZES.base }}>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.medium,
                  width: 200,
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.medium,
                  marginBottom: SIZES.base,
                }}
              >
                {price}
              </Text>
              <NumericInput
                onChange={(value) => console.log(value)}
                totalHeight={30}
                rounded
                rightButtonBackgroundColor="#07B999"
                leftButtonBackgroundColor="#07B999"
                iconStyle={{ color: COLORS.white }}
                inputStyle={{ fontFamily: FONTS.regular }}
                textColor={COLORS.dark}
                step={1}
                valueType="real"
                borderColor={COLORS.primary}
                separatorWidth={0}
                minValue={0}
                initValue={1}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Ionicons
              name="ios-close-circle-outline"
              size={24}
              color="#FF4141"
            />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default CartCard;
