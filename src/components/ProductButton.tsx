import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const ProductButton = () => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Productscreen")}>
        <Image
          source={{
            uri: "https://morgan-web-school-assignment.neocities.org/scan_product_button-removebg-preview.png",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductButton;

const styles = StyleSheet.create({
  image: {
    height: vs(40),
    width: s(300),
    borderRadius: 25,
    marginLeft: 27,
    marginTop: 5,
  },
});
