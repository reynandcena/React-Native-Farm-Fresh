import React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../infrastructure/theme/constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.primary,
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.medium,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.font,
              color: COLORS.white,
            }}
          >
            Deliver to
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.navigate("LocationScreen")}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
                color: COLORS.light,
                marginRight: SIZES.base,
              }}
            >
              58 Rizal St., Aliaga Nueva Ecija
            </Text>
            <Ionicons
              name="ios-chevron-down-outline"
              size={18}
              color={COLORS.light}
              style={{ marginBottom: 5 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
          >
            <AntDesign name="notification" size={20} color={COLORS.light} />
            <View
              style={{
                height: 6,
                width: 6,
                borderRadius: 100,
                backgroundColor: COLORS.red,
                position: "absolute",
                left: 12,
                top: 3,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: SIZES.small }}
            onPress={() => navigation.navigate("CartScreen")}
          >
            <AntDesign name="shoppingcart" size={20} color={COLORS.light} />
            <View
              style={{
                height: 6,
                width: 6,
                borderRadius: 100,
                backgroundColor: COLORS.red,
                position: "absolute",
                left: 13,
                top: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: SIZES.medium,
          paddingBottom: SIZES.medium,
          backgroundColor: COLORS.primary,
        }}
      >
        <Searchbar
          placeholder="Search products here..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholderTextColor={COLORS.gray}
          inputStyle={{ fontFamily: FONTS.regular, fontSize: SIZES.font }}
          iconColor={COLORS.primary}
        />
      </View>
    </>
  );
};

export default Header;
