import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Switch } from "react-native-paper";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const NotificationScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [isSwitchOn1, setIsSwitchOn1] = useState(false);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);

  const [isSwitchOn2, setIsSwitchOn2] = useState(false);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

  const [isSwitchOn3, setIsSwitchOn3] = useState(false);
  const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);

  const [isSwitchOn4, setIsSwitchOn4] = useState(false);
  const onToggleSwitch4 = () => setIsSwitchOn4(!isSwitchOn4);

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
              Order Updates
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
              Promotion
            </Text>
            <Switch
              value={!isSwitchOn1}
              onValueChange={onToggleSwitch1}
              color={COLORS.primary}
            />
          </View>
        </View>

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
              Chat
            </Text>
            <Switch
              value={!isSwitchOn2}
              onValueChange={onToggleSwitch2}
              color={COLORS.primary}
            />
          </View>
        </View>

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
              Activities
            </Text>
            <Switch
              value={isSwitchOn3}
              onValueChange={onToggleSwitch3}
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
              App Updates
            </Text>
            <Switch
              value={isSwitchOn4}
              onValueChange={onToggleSwitch4}
              color={COLORS.primary}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
