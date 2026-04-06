import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";


const Sharesection = () => {
  return (
    <View>
      <Text style={styles.headtext}  >Know anyone interested?</Text>
      <Text style={styles.subheadtext}  >for every new registration both yourself and your friend win 1 free ticket</Text>
      <TouchableOpacity  onPress={() => Alert.alert("write product to search")}>
        <Image
        source={{
          uri: "https://morgan-web-school-assignment.neocities.org/share_button-removebg-preview.png",
        }}
        style={styles.image}
      />
      </TouchableOpacity>
     
    </View>
  );
};

export default Sharesection;

const styles = StyleSheet.create({

  headtext:{
    fontSize: 25,
    fontWeight: 900,
    marginLeft: 12,
  },

  subheadtext:{
    fontSize: 19,
    fontWeight: 400,
    marginLeft: 12,
  },
 
  image: {
    height: vs(40),
    width: s(300),
    borderRadius: 25,
    marginLeft: 27,
    marginTop: 8,
     bottom: 2,
  },
});