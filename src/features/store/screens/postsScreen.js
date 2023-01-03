import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";

import LatestNewsCard from "../components/latestNewsCard";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const PostsScreen = () => {
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.small,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <Searchbar
        placeholder="Search post title here..."
        placeholderTextColor={COLORS.gray}
        inputStyle={{ fontFamily: FONTS.regular, fontSize: SIZES.font }}
        iconColor={COLORS.primary}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: SIZES.base }}
      >
        {posts.map((post) => (
          <LatestNewsCard
            key={post._id}
            id={post._id}
            imgUrl={urlFor(post.image).url()}
            title={post.name}
            date={post.date}
            content={post.content}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostsScreen;
