// screens/HomeScreen.tsx

import React, { useState, useCallback } from "react";
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
import { RootStackParamList } from "../navigation/types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleChange = useCallback(
    (key: "email" | "password", value: string) => {
      setCredentials((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleLogin = useCallback(() => {
    if (credentials.email && credentials.password) {
      navigation.navigate("MainTabs");
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  }, [credentials, navigation]);

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
