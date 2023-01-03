import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { urlFor } from "../../../infrastructure/data/client";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const SinglePostScreen = ({ navigation }) => {
  const {
    params: { id, imgUrl, title, date, content },
  } = useRoute();
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          resizeMode="cover"
          style={{ width: "100%", height: 300 }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(	38, 43, 46, 0.4) ",
            padding: 5,
            borderRadius: SIZES.base,
            position: "absolute",
            top: 20,
            left: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ padding: SIZES.medium }}>
          <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large }}>
            {title}
          </Text>
          <Text style={{ fontFamily: FONTS.regular, color: COLORS.gray }}>
            {date}
          </Text>

          <Text
            style={{
              fontFamily: FONTS.regular,
              color: COLORS.dark,
              marginVertical: SIZES.large,
            }}
          >
            {content}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default SinglePostScreen;
