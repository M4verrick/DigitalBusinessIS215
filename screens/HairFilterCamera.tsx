// screens/HairFilterCamera.tsx

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Replace with your actual hair filter image asset
import HAIR_FILTER_IMAGE from "../assets/filters/hair_filter.png";

const HairFilterCameraScreen: React.FC = () => {
  const [selectedImage, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access the image library is required."
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {!selectedImage ? (
        <TouchableOpacity style={styles.pickButton} onPress={pickImage}>
          <Text style={styles.pickButtonText}>Pick an Image</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
          {/* Overlay hair filter */}
          <Image source={HAIR_FILTER_IMAGE} style={styles.hairOverlay} />
        </View>
      )}
    </View>
  );
};

export default HairFilterCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  pickButton: {
    backgroundColor: "#FFF",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  pickButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 1.33, // assuming a 4:3 aspect ratio; adjust as needed
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  hairOverlay: {
    position: "absolute",
    top: 0, // adjust vertical position as needed
    left: 15,
    alignSelf: "center",
    width: SCREEN_WIDTH * 0.8, // adjust size as needed
    height: SCREEN_WIDTH * 0.8,
    resizeMode: "contain",
  },
});
