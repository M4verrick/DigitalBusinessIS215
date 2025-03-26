// screens/HaircutRatesScreen.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DashboardStackParamList } from "../navigation/types";

type RatesNavProp = NativeStackNavigationProp<
  DashboardStackParamList,
  "HaircutRates"
>;

const HaircutRatesScreen: React.FC = () => {
  const navigation = useNavigation<RatesNavProp>();

  return (
    <ScrollView style={styles.container}>
      {/* Card containing the Kimage logo, SERVICE RATE title, and the price list */}
      <View style={styles.rateCard}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/images/kimage_logo.webp")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>SERVICE RATE</Text>
        </View>

        <View style={styles.rateList}>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Men Haircut (Stylist)</Text>
            <Text style={styles.ratePrice}>SGD 30</Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Men Haircut (Senior Stylist)</Text>
            <Text style={styles.ratePrice}>SGD 40</Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Women Haircut (Stylist)</Text>
            <Text style={styles.ratePrice}>SGD 40</Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Women Haircut (Senior Stylist)</Text>
            <Text style={styles.ratePrice}>SGD 50</Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateText}>Director Haircut</Text>
            <Text style={styles.ratePrice}>SGD 80</Text>
          </View>
        </View>
      </View>

      {/* Virtual Stylist Banner */}
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/images/virtual_stylist.jpg")}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerText}>
            Find out which haircut or hair color suits you best
          </Text>
          <TouchableOpacity
            style={styles.bannerButton}
            onPress={() => navigation.navigate("VirtualStylist")}
          >
            <Text style={styles.bannerButtonText}>VIRTUAL STYLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HaircutRatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  rateCard: {
    marginHorizontal: 20,
    marginTop: 100,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 1,
  },
  rateList: {},
  rateItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  rateText: {
    fontSize: 14,
    color: "#333",
  },
  ratePrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  bannerContainer: {
    width: "100%",
    height: 180,
    position: "relative",
    marginTop: 80,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 8,
  },
  bannerText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    textAlign: "center",
  },
  bannerButton: {
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  bannerButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },
});
