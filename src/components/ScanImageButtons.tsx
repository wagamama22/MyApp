import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { use } from "react";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const ScanImageButtons = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.scanimgbackground}>
      <TouchableOpacity onPress={() => navigation.navigate("Productscreen")}>
        <Image
          source={{
            uri: "https://morgan-web-school-assignment.neocities.org/find%20product.png",
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profilescreen")}>
        <Image
          source={{
            uri: "https://morgan-web-school-assignment.neocities.org/take%20photos.png",
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Listscreen")}
      >
        <Image
          source={{
            uri: "https://morgan-web-school-assignment.neocities.org/earn%20tickets.png",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScanImageButtons;

const styles = StyleSheet.create({
  scanimgbackground: {
    backgroundColor: "#F8F7F2",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  image: {
    height: vs(100),
    width: s(100),
  },
});
