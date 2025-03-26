// screens/VirtualStylistScreen.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// If you have a typed param list for your dashboard stack, import it
// import { DashboardStackParamList } from "../navigation/types";

// type VirtualStylistNavProp = NativeStackNavigationProp<DashboardStackParamList, "VirtualStylist">;

const VirtualStylistScreen: React.FC = () => {
  // If you have a typed param list, use it here:
  // const navigation = useNavigation<VirtualStylistNavProp>();
  const navigation = useNavigation(); // untyped fallback

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/virtual_stylist_model.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Find The Best Haircut</Text>
          <Text style={styles.subtitle}>
            Try on our various haircut to see which you like best
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Navigate to the new VirtualTryOn screen
              navigation.navigate("VirtualTryOn");
            }}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VirtualStylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
});
