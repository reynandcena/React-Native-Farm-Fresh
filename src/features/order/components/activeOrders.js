import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

import sanityClient, { urlFor } from "../../../infrastructure/data/client";
import { COLORS, SIZES } from "../../../infrastructure/theme/constants";
import ActiveOrdersCard from "./activeOrdersCard";

const ActiveOrders = () => {
  const [activeOrders, setActiveOrders] = useState([]);

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveOrders;
