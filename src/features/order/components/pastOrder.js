import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import { COLORS, SIZES } from "../../../infrastructure/theme/constants";
import PastOrdersCard from "./pastOrdersCard";

const PastOrders = () => {
  const [pastOrders, setPastOrders] = useState([]);
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

export default PastOrders;
