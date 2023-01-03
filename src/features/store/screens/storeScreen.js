import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import sanityClient from "../../../infrastructure/data/client";
import { COLORS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";
import Header from "../../../components/Header";
import Carousel from "../components/carousel";
import Categories from "../components/categories";
import FeaturedRows from "../components/featured";
import LatestNews from "../components/latestNews";

const StoreScreen = ({ navigation }) => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] | order(_createdAt asc){
          ...,
          products[]->
        }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <Header />
      <ScrollView style={{ padding: SIZES.medium }}>
        <Carousel />
        <Categories />
        <View style={{ marginTop: SIZES.medium }}>
          {featuredCategories?.map((category) => (
            <FeaturedRows
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </View>
        <LatestNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreScreen;
