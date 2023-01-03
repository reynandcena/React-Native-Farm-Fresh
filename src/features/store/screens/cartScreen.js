import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";
import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import CartCard from "../components/cartCard";

const CartScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "selected" && _id == '002ac6e1-869a-4273-86a0-e4b1c5ab7e69']{
          ...,
          products[]->{
              ...,
              type->{
                  categoryName
              }
          }
      }[0]
      `
      )
      .then((data) => {
        setProducts(data?.products);
      });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.large,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {products?.map((product) => (
          <CartCard
            key={product._id}
            id={product._id}
            imgUrl={urlFor(product.image).url()}
            title={product.name}
            rating={product.rating}
            price={product.price}
            salePrice={product.salePrice}
            category={product.type?.categoryName}
            description={product.description}
          />
        ))}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: SIZES.base,
            borderColor: "#98989F50",
            marginVertical: SIZES.base,
          }}
        >
          <MaterialCommunityIcons
            name="ticket-percent-outline"
            size={24}
            color={COLORS.gray}
            style={{ marginLeft: SIZES.base }}
          />
          <TextInput
            style={{
              width: "60%",
              marginLeft: SIZES.base,
              fontFamily: FONTS.regular,
            }}
            placeholder="Enter coupon code"
          />
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: SIZES.medium,
              borderRadius: SIZES.base,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: SIZES.base }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.base,
            }}
          >
            <Text style={{ fontFamily: FONTS.semiBold }}>Sub Total</Text>
            <Text style={{ fontFamily: FONTS.regular }}>₱620.00</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.base,
            }}
          >
            <Text style={{ fontFamily: FONTS.semiBold }}>Discount</Text>
            <Text style={{ fontFamily: FONTS.regular }}>₱0.00</Text>
          </View>
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#98989F30",
              marginVertical: SIZES.base,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.base,
            }}
          >
            <Text style={{ fontFamily: FONTS.bold }}>Total</Text>
            <Text style={{ fontFamily: FONTS.bold }}>₱620.00</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: SIZES.medium,
              borderRadius: SIZES.base,
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.large,
            }}
            onPress={() => navigation.navigate("CheckoutScreen")}
          >
            <Text
              style={{
                fontFamily: FONTS.semiBold,
                color: COLORS.white,
                textTransform: "uppercase",
              }}
            >
              Proceed to checkout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
