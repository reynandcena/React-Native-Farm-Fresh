import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import star from "../../../../assets/images/star";

const WishListCard = ({
  id,
  imgUrl,
  title,
  rating,
  price,
  salePrice,
  category,
  description,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.white,
        marginHorizontal: SIZES.medium,
        marginVertical: SIZES.base,
        padding: SIZES.medium,
        borderRadius: SIZES.base,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <View
          style={{
            width: 60,
            marginHorizontal: SIZES.base,
          }}
        >
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{
              width: "100%",
              height: 60,
              resizeMode: "contain",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          />
        </View>
        <View style={{ width: 170 }}>
          <Text style={{ fontFamily: FONTS.medium }}>{title}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {ratingArray.map(() => (
              <SvgXml xml={star} width={16} height={16} />
            ))}
          </View>
          <Text style={{ fontFamily: FONTS.medium, color: COLORS.primary }}>
            PHP {price}
          </Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{ marginVertical: SIZES.base }}
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        >
          <Text style={{ color: COLORS.primary, fontFamily: FONTS.medium }}>
            Add to cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginVertical: SIZES.base }}>
          <Text style={{ color: COLORS.red, fontFamily: FONTS.medium }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WishListCard;
