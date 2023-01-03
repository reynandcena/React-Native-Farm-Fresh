import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { Card, Paragraph, Searchbar } from "react-native-paper";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const LocationScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.gray,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ImageBackground
        source={require("../../../../assets/bg.jpg")}
        resizeMode="cover"
        style={{ flex: 1, paddingHorizontal: SIZES.medium, opacity: 0.9 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: SIZES.base }}>
            <Searchbar
              placeholder="Search a new address..."
              onChangeText={onChangeSearch}
              value={searchQuery}
              placeholderTextColor={COLORS.gray}
              inputStyle={{ fontFamily: FONTS.regular, fontSize: SIZES.font }}
              iconColor={COLORS.primary}
              style={{
                marginVertical: SIZES.small,
                backgroundColor: COLORS.white,
              }}
            />
            <TouchableOpacity
              style={{ marginVertical: SIZES.small }}
              onPress={() => navigation.navigate("MapScreen")}
            >
              <Card
                style={{ padding: SIZES.font, backgroundColor: COLORS.light }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="my-location"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text
                    style={{
                      fontFamily: FONTS.medium,
                      fontSize: SIZES.font,
                      color: COLORS.primary,
                      marginLeft: SIZES.extraLarge,
                    }}
                  >
                    Your current location
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>

            <View style={{ marginVertical: SIZES.small }}>
              <Text style={{ fontFamily: FONTS.semiBold }}>Saved Location</Text>
              <Card
                style={{
                  padding: SIZES.font,
                  marginVertical: SIZES.small,
                }}
              >
                <View
                  style={{ marginVertical: SIZES.small, flexDirection: "row" }}
                >
                  <MaterialIcons name="home" size={24} color={COLORS.primary} />
                  <View style={{ marginLeft: SIZES.base }}>
                    <Text style={{ fontFamily: FONTS.semiBold }}>Home</Text>
                    <Paragraph
                      style={{
                        fontFamily: FONTS.regular,
                        color: COLORS.gray,
                        width: "70%",
                      }}
                    >
                      58 Rizal St., Poblacion West IV Aliaga Nueva Ecija
                    </Paragraph>
                  </View>
                </View>
              </Card>
              <Card
                style={{
                  padding: SIZES.font,
                  marginVertical: SIZES.small,
                }}
              >
                <View
                  style={{ marginVertical: SIZES.small, flexDirection: "row" }}
                >
                  <MaterialCommunityIcons
                    name="office-building-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <View style={{ marginLeft: SIZES.base }}>
                    <Text style={{ fontFamily: FONTS.semiBold }}>Office</Text>
                    <Paragraph
                      style={{
                        fontFamily: FONTS.regular,
                        color: COLORS.gray,
                        width: "70%",
                      }}
                    >
                      CRK03 - 2F Newstreet Bldg., Balibago, Angeles City
                    </Paragraph>
                  </View>
                </View>
              </Card>
              <Card
                style={{
                  padding: SIZES.font,
                  marginVertical: SIZES.small,
                }}
              >
                <View
                  style={{ marginVertical: SIZES.small, flexDirection: "row" }}
                >
                  <Entypo name="location" size={24} color={COLORS.primary} />
                  <View style={{ marginLeft: SIZES.base }}>
                    <Text style={{ fontFamily: FONTS.semiBold }}>Other</Text>
                    <Paragraph
                      style={{
                        fontFamily: FONTS.regular,
                        color: COLORS.gray,
                        width: "70%",
                      }}
                    >
                      1689 Orchids St., Villa Eusebio San Miguel Pasig City
                    </Paragraph>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LocationScreen;
