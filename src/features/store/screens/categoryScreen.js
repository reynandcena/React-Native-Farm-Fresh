import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";

import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import SearchProdCard from "../components/searchProdCard";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const CategoryScreen = ({ id }) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "products"] | order(_createdAt asc){
          ...,
            type->{
                categoryName
            }  
        }        
        `
      )
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.small,
        paddingVertical: SIZES.small,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <Searchbar
        placeholder="Search products here..."
        placeholderTextColor={COLORS.gray}
        inputStyle={{ fontFamily: FONTS.regular, fontSize: SIZES.font }}
        iconColor={COLORS.primary}
      />

      <FlatList
        style={{ marginTop: 20 }}
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <SearchProdCard
            key={item._id}
            id={item._id}
            imgUrl={urlFor(item.image).url()}
            title={item.name}
            rating={item.rating}
            price={item.price}
            salePrice={item.salePrice}
            category={item.type?.categoryName}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
