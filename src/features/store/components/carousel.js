import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const Carousel = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.white,
          padding: SIZES.medium,
          borderRadius: SIZES.base,
          marginBottom: SIZES.base,
        }}
      >
        <MaterialCommunityIcons
          name="clock-time-five-outline"
          size={28}
          color={COLORS.primary}
        />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                marginRight: SIZES.base,
              }}
            >
              Next Delivery Slot Available
            </Text>
            <MaterialCommunityIcons
              name="information-outline"
              size={16}
              color={COLORS.gray}
            />
          </View>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.font,
            }}
          >
            25 Dec 2022: 6:30 AM to 3:00 PM
          </Text>
        </View>
        <Image
          source={require("../../../../assets/images/delivery.png")}
          style={{ width: 35, height: 35 }}
        />
      </View>
      <View>
        <Swiper
          autoplay={true}
          showsPagination={false}
          autoplayTimeout={4}
          height={190}
        >
          <View
            style={{
              backgroundColor: COLORS.darkCard,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Image
              source={require("../../../../assets/images/Banner1.png")}
              style={{
                width: "100%",
                resizeMode: "contain",
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: COLORS.darkCard,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Image
              source={require("../../../../assets/images/Banner2.png")}
              style={{
                width: "100%",
                resizeMode: "contain",
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: COLORS.darkCard,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Image
              source={require("../../../../assets/images/Banner3.png")}
              style={{
                width: "100%",
                resizeMode: "contain",
              }}
            />
          </View>
        </Swiper>
      </View>
    </>
  );
};

export default Carousel;
