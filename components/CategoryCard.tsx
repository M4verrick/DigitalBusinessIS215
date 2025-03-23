// components/CategoryCard.tsx

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface CategoryCardProps {
  name: string;
  icon: ImageSourcePropType;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={icon} style={styles.categoryIcon} />
      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    alignItems: "center",
    marginRight: 16,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EEE", // fallback background for placeholders
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 12,
    color: "#333",
  },
});
