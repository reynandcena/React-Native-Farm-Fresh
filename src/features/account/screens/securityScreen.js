import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Switch } from "react-native-paper";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const SecurityScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        padding: SIZES.medium,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{
          paddingVertical: SIZES.base,
          paddingHorizontal: SIZES.medium,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.base,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#98989F30",
            paddingVertical: SIZES.medium,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
              }}
            >
              PIN
            </Text>
            <Switch
              value={!isSwitchOn}
              onValueChange={onToggleSwitch}
              color={COLORS.primary}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: SIZES.medium,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
              }}
            >
              2FA Verification
            </Text>
            <Switch
              value={!isSwitchOn1}
              onValueChange={onToggleSwitch1}
              color={COLORS.primary}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecurityScreen;
