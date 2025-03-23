// components/OutletCard.tsx

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from "react-native";

interface OutletCardProps {
  name: string;
  address: string;
  rating: number;
  reviews: number;
  image: ImageSourcePropType;
}

const { width } = Dimensions.get("window");

const OutletCard: React.FC<OutletCardProps> = ({
  name,
  address,
  rating,
  reviews,
  image,
}) => {
  return (
    <View style={styles.outletCard}>
      <Image source={image} style={styles.outletImage} resizeMode="cover" />
      <View style={styles.outletInfo}>
        <Text style={styles.outletName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.outletAddress} numberOfLines={1}>
          {address}
        </Text>
        <Text style={styles.outletRating}>
          {rating} ({reviews.toLocaleString()})
        </Text>
      </View>
    </View>
  );
};

export default OutletCard;

const styles = StyleSheet.create({
  outletCard: {
    width: width * 0.8,
    marginRight: 16,
    backgroundColor: "#FFF",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEE",
  },
  outletImage: {
    width: "100%",
    height: 120,
  },
  outletInfo: {
    padding: 10,
  },
  outletName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  outletAddress: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  outletRating: {
    fontSize: 12,
    color: "#000",
  },
});
