import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import { Avatar } from "react-native-paper";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FocusedStatusBar from "../../../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";

const AccountScreen = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture();
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View
        style={{ backgroundColor: COLORS.white, paddingVertical: SIZES.medium }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: SIZES.medium,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <View>
                <Avatar.Icon
                  size={100}
                  icon="camera"
                  color={COLORS.white}
                  backgroundColor={COLORS.primary}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    left: 70,
                    backgroundColor: COLORS.light,
                    borderRadius: 100,
                    padding: SIZES.base,
                  }}
                >
                  <Ionicons
                    name="ios-add-sharp"
                    size={16}
                    color={COLORS.primary}
                  />
                </View>
              </View>
            )}
            {photo && (
              <View>
                <Avatar.Image
                  size={100}
                  source={{ uri: photo }}
                  backgroundColor={COLORS.primary}
                  style={{ backgroundColor: COLORS.white }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 5,
                    left: 70,
                    backgroundColor: COLORS.primary,
                    borderRadius: 100,
                    padding: SIZES.base,
                  }}
                >
                  <MaterialIcons name="edit" size={16} color={COLORS.white} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingVertical: SIZES.small,
          }}
        >
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
            Reynan Decena
          </Text>
          <Text style={{ fontFamily: FONTS.regular }}>
            reynandecena1984@gmail.com
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.medium,
            backgroundColor: COLORS.white,
            margin: SIZES.medium,
            borderRadius: SIZES.base,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#98989F30",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("AccountInfo")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <FontAwesome name="user-o" size={16} color={COLORS.white} />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Account Information
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#98989F30",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("OrderTab")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={16}
                  color={COLORS.white}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                My Orders
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#98989F30",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("PaymentOption")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <MaterialIcons name="payment" size={16} color={COLORS.white} />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Payment Options
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("LocationScreen")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <Ionicons
                  name="md-location-outline"
                  size={16}
                  color={COLORS.white}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Delivery Address
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.medium,
            backgroundColor: COLORS.white,
            margin: SIZES.medium,
            borderRadius: SIZES.base,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#98989F30",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("NotificationScreen")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <Ionicons
                  name="ios-notifications-outline"
                  size={16}
                  color={COLORS.white}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Notifications
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("SecurityScreen")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <MaterialCommunityIcons
                  name="security"
                  size={16}
                  color={COLORS.white}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Security
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.medium,
            backgroundColor: COLORS.white,
            margin: SIZES.medium,
            borderRadius: SIZES.base,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#98989F30",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => setModalVisible(true)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.gray,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <MaterialCommunityIcons
                  name="account-minus-outline"
                  size={16}
                  color={COLORS.white}
                />
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22,
                  }}
                >
                  <View
                    style={{
                      margin: 20,
                      backgroundColor: "white",
                      borderRadius: 20,
                      padding: 35,
                      alignItems: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 5,
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: SIZES.font,
                        textAlign: "center",
                        fontFamily: FONTS.medium,
                      }}
                    >
                      Are you sure you want to deactivate your account?
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Pressable
                        style={{
                          borderRadius: SIZES.base,
                          padding: 10,
                          elevation: 2,
                          backgroundColor: COLORS.red,
                        }}
                        onPress={() => navigation.navigate("Main")}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.font,
                            color: COLORS.white,
                          }}
                        >
                          Deactivate Account
                        </Text>
                      </Pressable>
                      <Pressable
                        style={{
                          borderRadius: SIZES.base,
                          padding: 10,
                          elevation: 2,
                          backgroundColor: COLORS.gray,
                          marginLeft: SIZES.base,
                        }}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text
                          style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.font,
                            color: COLORS.white,
                          }}
                        >
                          Cancel
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Deactivate Account
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: SIZES.medium,
            }}
            onPress={() => navigation.navigate("Main")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: COLORS.red,
                  padding: SIZES.base,
                  borderRadius: SIZES.base,
                }}
              >
                <Ionicons
                  name="md-log-out-outline"
                  size={16}
                  color={COLORS.white}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.medium,
                  marginLeft: SIZES.base,
                }}
              >
                Logout
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
