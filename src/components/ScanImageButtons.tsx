import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";

const ScanImageButtons = () => {
  return (
    <View style={styles.scanimgbackground}>
      <TouchableOpacity  onPress={() => Alert.alert("write product to search")}>
        <Image
        source={{
          uri: "https://morgan-web-school-assignment.neocities.org/find%20product.png",
        }}
        style={styles.image}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => Alert.alert("Take photos now")}  >
          <Image
        source={{
          uri: "https://morgan-web-school-assignment.neocities.org/take%20photos.png",
        }}
        style={styles.image}
      />
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => Alert.alert("You have gooten a ticket for yourself")}>
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
    backgroundColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  image: {
    height: vs(100),
    width: s(100),
  },
});
