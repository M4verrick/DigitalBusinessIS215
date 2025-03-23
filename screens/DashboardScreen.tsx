import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

import CategoryCard from "../components/CategoryCard";
import OutletCard from "../components/OutletCard";

const categories = [
  {
    id: "1",
    name: "Haircut",
    icon: require("../assets/icons/haircut.png"),
  },
  {
    id: "2",
    name: "Treatment",
    icon: require("../assets/icons/hairtreatment.png"),
  },
  {
    id: "3",
    name: "Perming",
    icon: require("../assets/icons/perm.png"),
  },
  {
    id: "4",
    name: "Coloring",
    icon: require("../assets/icons/hair-dye.png"),
  },
];

const outlets = [
  {
    id: "1",
    name: "Kimage Northpoint City",
    address: "930 Yishun Ave 2",
    rating: 4.8,
    reviews: 3100,
    image: require("../assets/images/kimage_northpoint.jpg"),
  },
  {
    id: "2",
    name: "Kimage Toa Payoh",
    address: "177 Toa Payoh Central",
    rating: 4.7,
    reviews: 2700,
    image: require("../assets/images/kimage_toapayoh.jpg"),
  },
];

const DashboardScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          Find the service you want, and treat yourself
        </Text>
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
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>VIRTUAL STYLIST</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Category Section */}
      <Text style={styles.sectionTitle}>What do you want to do?</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryScrollContent}
      >
        {categories.map((cat, index) => (
          /* Wrap each CategoryCard in a View to add spacing */
          <View
            key={cat.id}
            style={{
              marginRight: index === categories.length - 1 ? 0 : 16, // e.g., 16px spacing
            }}
          >
            <CategoryCard name={cat.name} icon={cat.icon} />
          </View>
        ))}
      </ScrollView>

      {/* Outlets Section */}
      <View style={styles.outletHeader}>
        <Text style={styles.sectionTitle}>Outlets near you</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={outlets}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.outletList}
        renderItem={({ item }) => (
          <OutletCard
            name={item.name}
            address={item.address}
            rating={item.rating}
            reviews={item.reviews}
            image={item.image}
          />
        )}
      />
    </ScrollView>
  );
};

export default DashboardScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  /* Header */
  header: {
    marginTop: 60, // Move content further down from the status bar
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  /* Banner */
  bannerContainer: {
    width: "100%",
    height: 200, // Slightly taller banner
    position: "relative",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 8,
  },
  bannerText: {
    color: "#FFF",
    fontSize: 16,
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
  /* Section Titles */
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  /* Category Section */
  categoryScroll: {
    marginBottom: 20,
  },
  categoryScrollContent: {
    paddingHorizontal: 60, // Adjust as needed
  },
  /* Outlets Section */
  outletHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  viewAllText: {
    color: "#007BFF",
    fontSize: 14,
  },
  outletList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
