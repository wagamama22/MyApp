import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";

const Timers = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://morgan-web-school-assignment.neocities.org/timer.png",
      }}
      style={styles.imgbackground}
    />
  );
};

export default Timers;

const styles = StyleSheet.create({
  imgbackground: {
    width: scale(350),
    height: verticalScale(100),
  },
});
