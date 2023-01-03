import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import NumericInput from "react-native-numeric-input";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import { urlFor } from "../../../infrastructure/data/client";
import FocusedStatusBar from "../../../components/FocusedStatusBar";
import star from "../../../../assets/images/star";

const ProductScreen = ({ navigation }) => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      price,
      salePrice,
      category,
      description,
    },
  } = useRoute();

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          width: "100%",
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: SIZES.large,
        }}
      >
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          resizeMode="contain"
          style={{ width: "100%", height: 300 }}
        />
      </View>
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
      <TouchableOpacity
        style={{
          backgroundColor: "#07B99970",
          padding: 5,
          borderRadius: SIZES.base,
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Ionicons name="md-heart-outline" size={24} color={COLORS.white} />
      </TouchableOpacity>

      <ScrollView
        style={{
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.medium,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={24}
              color={COLORS.primary}
            />
            <Text
              style={{
                color: COLORS.primary,
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.font,
                marginLeft: SIZES.base,
              }}
            >
              Free Shipping
            </Text>
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large }}>
              {title}
            </Text>
            <View
              style={{
                marginVertical: SIZES.medium,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#98989F40",
                    borderRadius: SIZES.base,
                    padding: SIZES.base,
                  }}
                >
                  {ratingArray.map(() => (
                    <SvgXml xml={star} width={16} height={16} />
                  ))}
                </View>
                <View
                  style={{
                    borderRadius: SIZES.base,
                    backgroundColor: "#07B99920",
                    padding: SIZES.base,
                    marginHorizontal: SIZES.base,
                  }}
                >
                  <Text
                    style={{ color: COLORS.dark, fontFamily: FONTS.medium }}
                  >
                    {category}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.large,
                  color: COLORS.primary,
                }}
              >
                PHP {price}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                marginVertical: SIZES.base,
              }}
            >
              Description
            </Text>
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font }}>
              {description}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.large,
            }}
          >
            <NumericInput
              onChange={(value) => console.log(value)}
              totalHeight={40}
              rounded
              rightButtonBackgroundColor="#07B999"
              leftButtonBackgroundColor="#07B999"
              iconStyle={{ color: COLORS.white }}
              inputStyle={{ fontFamily: FONTS.regular }}
              textColor={COLORS.dark}
              step={1}
              valueType="real"
              borderColor={COLORS.primary}
              separatorWidth={0}
              minValue={0}
            />
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.medium,
                borderRadius: SIZES.base,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("CartScreen")}
            >
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  color: COLORS.white,
                  textTransform: "uppercase",
                }}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductScreen;
