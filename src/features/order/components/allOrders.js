import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import ActiveOrdersCard from "./activeOrdersCard";
import PastOrdersCard from "./pastOrdersCard";

const AllOrders = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "selected" && _id == '493f675e-50c7-4224-bca9-3d524fbd9282']{
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
        setActiveOrders(data?.products);
      });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "selected" && _id == '003f05b2-e567-4939-ba68-1706205f7738']{
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
        setPastOrders(data?.products);
      });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: SIZES.medium }}
      >
        <View style={{ marginBottom: SIZES.medium }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
            Active Orders
          </Text>
        </View>
        {activeOrders?.map((activeOrder) => (
          <ActiveOrdersCard
            key={activeOrder._id}
            id={activeOrder._id}
            imgUrl={urlFor(activeOrder.image).url()}
            title={activeOrder.name}
            rating={activeOrder.rating}
            price={activeOrder.price}
            salePrice={activeOrder.salePrice}
            category={activeOrder.type?.categoryName}
            description={activeOrder.description}
          />
        ))}

        <View style={{ marginVertical: SIZES.medium }}>
          <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
            Past Orders
          </Text>
        </View>
        {pastOrders?.map((pastOrder) => (
          <PastOrdersCard
            key={pastOrder._id}
            id={pastOrder._id}
            imgUrl={urlFor(pastOrder.image).url()}
            title={pastOrder.name}
            rating={pastOrder.rating}
            price={pastOrder.price}
            salePrice={pastOrder.salePrice}
            category={pastOrder.type?.categoryName}
            description={pastOrder.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllOrders;
