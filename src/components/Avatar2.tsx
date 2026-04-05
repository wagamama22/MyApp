import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";

const Avatar = () => {
  return (
    <SafeAreaView style={styles.myavatar2}>
      <View style={styles.submyavatar2}>
        <Image
          source={{
            uri: "https://morgan-web-school-assignment.neocities.org/av1.png",
          }}
          style={styles.image}
        />
        <Text style={styles.avatartxt}>124</Text>
      </View>
      {/* <View>
        <Text style={styles.avatartxt}>124</Text>
      </View> */}
      <View>
        <Text style={styles.avatartxt1}>View Entries </Text>
      </View>
    </SafeAreaView>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  myavatar2: {
    flexDirection: "column",
  },
  submyavatar2: {
    flexDirection: "row",
  },
  image: {
    height: vs(20),
    width: s(20),
  },
  avatartxt: {
    fontSize: 25,
    fontWeight: 900,
    marginLeft: 4,
    bottom: 5,
  },
  avatartxt1: {
    fontSize: 19,
    fontWeight: 400,
    color: "red",
  },
  submyavatar: {
    flexDirection: "column",
  },
});
