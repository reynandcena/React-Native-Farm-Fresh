import React from "react";
import { Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const CategoryCard = ({ id, imgUrl, title, products }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: COLORS.white,
        padding: SIZES.small,
        borderRadius: SIZES.small,
        marginRight: SIZES.medium,
      }}
      onPress={() => {
        navigation.navigate("CategoryScreen", { id });
      }}
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{ width: 50, height: 50, marginBottom: SIZES.small }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          textAlign: "center",
          width: 70,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
