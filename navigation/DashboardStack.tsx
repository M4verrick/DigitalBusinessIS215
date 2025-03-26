// navigation/DashboardStack.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import HaircutRatesScreen from "../screens/HaircutRatesScreen";
import VirtualStylistScreen from "../screens/VirtualStylistScreen";
import VirtualTryOnScreen from "../screens/VirtualTryOnScreen";
import HairFilterCamera from "../screens/HairFilterCamera";
import { DashboardStackParamList } from "./types";

const Stack = createNativeStackNavigator<DashboardStackParamList>();

export default function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
      <Stack.Screen name="HaircutRates" component={HaircutRatesScreen} />
      <Stack.Screen name="VirtualStylist" component={VirtualStylistScreen} />
      <Stack.Screen name="VirtualTryOn" component={VirtualTryOnScreen} />
      <Stack.Screen name="HairFilterCamera" component={HairFilterCamera} />
    </Stack.Navigator>
  );
}
