import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AccessNavigator from "./src/infrastructure/navigation/access.navigator";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./src/infrastructure/theme/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("./src/infrastructure/theme/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("./src/infrastructure/theme/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./src/infrastructure/theme/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("./src/infrastructure/theme/fonts/Poppins-ExtraBold.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <AccessNavigator />
    </NavigationContainer>
  );
}
