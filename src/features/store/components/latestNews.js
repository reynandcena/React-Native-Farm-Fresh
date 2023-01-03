import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import LatestNewsCard from "./latestNewsCard";
import sanityClient, { urlFor } from "../../../infrastructure/data/client";

const LatestNews = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "posts"] | order(_createdAt desc)
    `
      )
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <View style={{ marginVertical: SIZES.small }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
          Latest News
        </Text>
      </View>

      {posts.slice(0, 5).map((post) => (
        <LatestNewsCard
          key={post._id}
          id={post._id}
          imgUrl={urlFor(post.image).url()}
          title={post.name}
          date={post.date}
          content={post.content}
        />
      ))}

      <Button
        labelStyle={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
        mode="outlined"
        onPress={() => navigation.navigate("PostsScreen")}
        style={{
          borderRadius: SIZES.base,
          borderColor: COLORS.primary,
          paddingVertical: 4,
          marginVertical: SIZES.large,
        }}
      >
        View All Posts
      </Button>
    </View>
  );
};

export default LatestNews;
