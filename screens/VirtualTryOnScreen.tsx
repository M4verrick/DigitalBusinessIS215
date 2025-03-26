// screens/VirtualTryOnScreen.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DashboardStackParamList } from "../navigation/types";

type VirtualTryOnNavProp = NativeStackNavigationProp<
  DashboardStackParamList,
  "VirtualTryOn"
>;

const VirtualTryOnScreen: React.FC = () => {
  const navigation = useNavigation<VirtualTryOnNavProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSelfieMode = () => {
    // Navigate to the Hair Filter Camera screen
    
  };

  const handleUploadPhoto = () => {
    // TODO: Implement photo upload logic
    navigation.navigate("HairFilterCamera");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>VIRTUAL TRY-ON</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Section / Title */}
        <View style={styles.introContainer}>
          <Text style={styles.mainTitle}>
            Find the perfect haircut for you with Kimage Virtual Stylist
          </Text>
          <Text style={styles.subTitle}>
            For the best virtual try-on experience, ensure you have good
            lighting and a strong WiFi connection
          </Text>
        </View>

        {/* Two Option Cards */}
        <TouchableOpacity style={styles.card} onPress={handleSelfieMode}>
          <View style={styles.cardContent}>
            <View style={styles.iconWrapper}>
              <Ionicons name="camera-outline" size={26} color="#000" />
            </View>
            <Text style={styles.cardTitle}>Selfie Mode</Text>
            <Ionicons name="chevron-forward" size={22} color="#999" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleUploadPhoto}>
          <View style={styles.cardContent}>
            <View style={styles.iconWrapper}>
              <Ionicons name="image-outline" size={26} color="#000" />
            </View>
            <Text style={styles.cardTitle}>Upload Photo</Text>
            <Ionicons name="chevron-forward" size={22} color="#999" />
          </View>
        </TouchableOpacity>

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>
          By using Kimage Virtual Stylist, I consent that Kimage processes my
          image. Learn more about our Terms of Use and privacy notice.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VirtualTryOnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  /* Custom Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF",
  },
  /* Scroll Content */
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  introContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    lineHeight: 22,
    color: "#000",
  },
  subTitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  /* Cards */
  card: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#EEE",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  cardTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  disclaimer: {
    fontSize: 12,
    color: "#999",
    lineHeight: 18,
    marginTop: 12,
  },
});
