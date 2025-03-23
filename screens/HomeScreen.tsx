// screens/HomeScreen.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// If RootStackParamList is in App.tsx, import from "../App"
// If it's in navigation/types.ts, import from "../navigation/types"
import { RootStackParamList } from "../navigation/types"; // Adjust path as needed

interface LoginCredentials {
  email: string;
  password: string;
}

// Type the navigation object based on our route definitions
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  // Use typed navigation
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleChange = (key: keyof LoginCredentials, value: string) => {
    setCredentials((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogin = () => {
    // Placeholder login logic. Replace with your authentication.
    if (credentials.email && credentials.password) {
      // Navigate to DashboardScreen upon successful login
      navigation.navigate("Dashboard");
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <LinearGradient
        colors={["#FFFFFF", "#F0F0F0"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.logoText}>KIMAGE</Text>

          <View style={styles.loginForm}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={credentials.email}
              onChangeText={(text) => handleChange("email", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              autoCapitalize="none"
              value={credentials.password}
              onChangeText={(text) => handleChange("password", text)}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 40,
    letterSpacing: 2,
  },
  loginForm: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
