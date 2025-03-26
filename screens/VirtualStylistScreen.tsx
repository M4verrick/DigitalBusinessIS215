// screens/VirtualStylistScreen.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const VirtualStylistScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Background image */}
      <ImageBackground
        source={require("../assets/images/virtual_stylist_model.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Dark overlay to ensure text is readable */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Find The Best Haircut</Text>
          <Text style={styles.subtitle}>
            Try on our various haircut to see which you like best
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Add any further logic for "Get Started" here
              // e.g., navigation to a try-on feature
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
    backgroundColor: "#000", // fallback color if image fails to load
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)", // dark overlay
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
