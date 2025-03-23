// navigation/MainTabs.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import DashboardScreen from "../screens/DashboardScreen";

// Placeholder screens for tabs you haven't built yet
const PlaceholderScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Coming Soon</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 0,
        },
        tabBarIcon: ({ color, size }) => {
          // Dynamically set the icon based on the route name
          if (route.name === "Dashboard") {
            return <Ionicons name="home-outline" size={size} color={color} />;
          } else if (route.name === "Services") {
            return <Ionicons name="grid-outline" size={size} color={color} />;
          } else if (route.name === "Cart") {
            return <Ionicons name="cart-outline" size={size} color={color} />;
          } else if (route.name === "Favorites") {
            return <Ionicons name="heart-outline" size={size} color={color} />;
          } else if (route.name === "Profile") {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
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
