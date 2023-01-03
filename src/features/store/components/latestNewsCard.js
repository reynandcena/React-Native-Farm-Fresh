import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
const LatestNewsCard = ({ id, imgUrl, title, date, content }) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SinglePostScreen", {
            id,
            imgUrl,
            title,
            date,
            content,
          })
        }
      >
        <Card
          style={{
            padding: SIZES.medium,
            marginVertical: SIZES.medium,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: 190 }}>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.font,
                  color: COLORS.dark,
                }}
              >
                {title}
              </Text>
              <View style={{ marginTop: SIZES.base }}>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.red,
                  }}
                >
                  {date}
                </Text>
              </View>
            </View>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={{ width: 100, height: 80, borderRadius: 8 }}
            />
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
};

export default LatestNewsCard;
