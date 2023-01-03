import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import FeaturedCard from "./featuredCard";

const FeaturedRows = ({ id, title, description }) => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id]{
            ...,
            products[]->{
                ...,
                type->{
                    categoryName
                }
            }
        }[0]
        `,
        { id }
      )
      .then((data) => {
        setProducts(data?.products);
      });
  }, [id]);
  return (
    <View style={{ marginBottom: SIZES.base }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
          {title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CategoryScreen");
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.font,
              color: COLORS.primary,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: SIZES.medium }}
      >
        {products?.map((product) => (
          <FeaturedCard
            key={product._id}
            id={product._id}
            imgUrl={urlFor(product.image).url()}
            title={product.name}
            rating={product.rating}
            price={product.price}
            salePrice={product.salePrice}
            category={product.type?.categoryName}
            description={product.description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
