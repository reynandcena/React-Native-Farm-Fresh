import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import star from "../../../../assets/images/star";
const SearchProdCard = ({
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
    <TouchableOpacity
      style={{
        flex: 1,
        width: "50%",
        justifyContent: "space-around",
        backgroundColor: COLORS.light,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: SIZES.base,
        margin: SIZES.base,
      }}
      onPress={() => {
        navigation.navigate("ProductScreen", {
          id,
          imgUrl,
          title,
          rating,
          price,
          salePrice,
          category,
          description,
        });
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: SIZES.base,
          borderTopRightRadius: SIZES.base,
          padding: SIZES.base,
        }}
      >
        <Image
          source={{
            uri: imgUrl,
          }}
          style={{
            width: "100%",
            height: 120,
            resizeMode: "contain",
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
        />
        <View
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.base,
            borderRadius: SIZES.base,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              textAlign: "center",
              color: COLORS.white,
            }}
          >
            {category}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(	38, 43, 46, 0.4)",
            padding: 5,
            borderRadius: SIZES.base,
          }}
        >
          <Ionicons name="md-heart-outline" size={16} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.font,
          }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.base,
                alignItems: "center",
              }}
            >
              {ratingArray.map(() => (
                <SvgXml xml={star} width={16} height={16} />
              ))}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.font,
                  color: COLORS.primary,
                }}
              >
                PHP {price}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.small,
                  color: COLORS.gray,
                  textDecorationLine: "line-through",
                  marginLeft: SIZES.base,
                }}
              >
                {salePrice}
              </Text>
            </View>
          </View>

          <IconButton
            mode="contained"
            icon="shopping"
            containerColor="#07B99930"
            iconColor={COLORS.primary}
            size={20}
            onPress={() => navigation.navigate("CartScreen")}
            style={{ borderRadius: SIZES.base }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchProdCard;
