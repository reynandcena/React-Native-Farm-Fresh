import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import transaction from "../../../infrastructure/data/transactions";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const Updates = ({ item }) => (
  <View
    style={{
      flexDirection: "row",
      marginVertical: SIZES.base,
    }}
  >
    <View
      style={{
        backgroundColor: "#07B99920",
        padding: SIZES.small,
        borderRadius: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
      }}
    >
      <MaterialCommunityIcons name={item.icon} size={24} color="black" />
    </View>
    <View style={{ marginLeft: SIZES.small }}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          paddingRight: 70,
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="calendar-month-outline"
          size={18}
          color="black"
        />
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.gray,
            marginLeft: SIZES.base,
          }}
        >
          {item.date}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: FONTS.regular,
          paddingVertical: SIZES.base,
          paddingRight: 40,
        }}
      >
        {item.description}
      </Text>
    </View>
  </View>
);

const NotificationTransactions = ({ item }) => {
  const [transData, setTransData] = useState(transaction);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.medium,
        paddingTop: SIZES.large,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <FlatList
        data={transData}
        renderItem={Updates}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NotificationTransactions;
