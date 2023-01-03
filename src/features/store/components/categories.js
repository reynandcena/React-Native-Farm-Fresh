import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import CategoryCard from "./categoryCard";

const Categories = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"] | order(_createdAt asc)
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <View style={{ marginVertical: SIZES.small }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
          Categories
        </Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={24}
            color={COLORS.gray}
          />
          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={COLORS.gray}
          />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.small,
          }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              id={category._id}
              imgUrl={urlFor(category.image).url()}
              title={category.categoryName}
              products={category.products}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
