// navigation/MainTabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DashboardStack from "./DashboardStack";

// Placeholder screens for tabs you haven't built yet
const PlaceholderScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Coming Soon</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  // Grab safe area insets
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          // Dynamically adjust height & bottom padding based on device
          height: 30 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          // If you prefer some spacing above the label, adjust marginBottom
          marginBottom: 0,
        },
        tabBarIcon: ({ color, size }) => {
          // Dynamically set the icon based on the route name
          switch (route.name) {
            case "DashboardTab":
              return <Ionicons name="home-outline" size={size} color={color} />;
            case "Services":
              return <Ionicons name="grid-outline" size={size} color={color} />;
            case "Cart":
              return <Ionicons name="cart-outline" size={size} color={color} />;
            case "Favorites":
              return (
                <Ionicons name="heart-outline" size={size} color={color} />
              );
            case "Profile":
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="DashboardTab"
        component={DashboardStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="Services"
        component={PlaceholderScreen}
        options={{ title: "Services" }}
      />
      <Tab.Screen
        name="Cart"
        component={PlaceholderScreen}
        options={{ title: "Cart" }}
      />
      <Tab.Screen
        name="Favorites"
        component={PlaceholderScreen}
        options={{ title: "Favorites" }}
      />
      <Tab.Screen
        name="Profile"
        component={PlaceholderScreen}
        options={{ title: "Profile" }}
      />
    </Tab.Navigator>
  );
}
