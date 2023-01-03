import React, { useState } from "react";
import MapView from "react-native-maps";
import { Searchbar } from "react-native-paper";

import { COLORS, FONTS, SIZES } from "../../../infrastructure/theme/constants";
import FocusedStatusBar from "../../../components/FocusedStatusBar";

const MapScreen = () => {
  const [latDelta, setLatDelta] = useState(0);

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <Searchbar
        placeholder="Search a new address..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        placeholderTextColor={COLORS.gray}
        inputStyle={{ fontFamily: FONTS.regular, fontSize: SIZES.font }}
        iconColor={COLORS.primary}
        style={{
          position: "absolute",
          zIndex: 999,
          top: 40,
          width: "90%",
          alignSelf: "center",
        }}
      />
      <MapView
        style={{ height: "100%", width: "100%" }}
        region={{
          latitude: 14.571278257321707,
          longitude: 121.0953496554118,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        <MapView.Marker
          title="1689 Orchid St., Villa Eusebio San Miguel, Pasig City"
          coordinate={{
            latitude: 14.571278257321707,
            longitude: 121.0953496554118,
          }}
        />
      </MapView>
    </>
  );
};

export default MapScreen;
