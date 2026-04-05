import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";

const Avatar = () => {
  return (
    <SafeAreaView style={styles.myavatar}>
        <Image
          source={{
            uri: "https://morgan-web-school-assignment.neocities.org/avatar.png",
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.avatartxt}>Hi John!</Text>
          <Text style={styles.avatartxt1}>50+ Scans </Text>
        </View>
      </SafeAreaView>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  myavatar: {
    flexDirection: "row",
  },
  image: {
    height: vs(50),
    width: s(50),
    borderRadius: 25,
  },
  avatartxt: {
    fontSize: 25,
    fontWeight: 900,
  },
  avatartxt1: {
    fontSize: 19,
    fontWeight: 400,
  },
  submyavatar: {
    flexDirection: "column",
  },
});
