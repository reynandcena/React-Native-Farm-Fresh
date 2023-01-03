import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import SearchProdCard from "../../store/components/searchProdCard";

const SearchScreen = ({ navigation }) => {
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
      }}
    >
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
          Search
        </Text>
      </View>
      <View style={{ padding: SIZES.medium }}>
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
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
