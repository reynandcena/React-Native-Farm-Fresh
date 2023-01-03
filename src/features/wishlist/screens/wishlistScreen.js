import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";
import WishListCard from "../components/wishListCard";

const WishlistScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "selected" && _id == '88f35555-6aa1-4669-9482-ec07265678c6']{
          ...,
          products[]->{
              ...,
              type->{
                  categoryName
              }
          }
      }[0]
      `
      )
      .then((data) => {
        setProducts(data?.products);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.medium,
          backgroundColor: COLORS.white,
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 32 }}
          onPress={() => navigation.navigate("StoreTab")}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.dark,
          }}
        >
          Wishlist
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: SIZES.medium }}
      >
        {products?.map((product) => (
          <WishListCard
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
    </SafeAreaView>
  );
};

export default WishlistScreen;
