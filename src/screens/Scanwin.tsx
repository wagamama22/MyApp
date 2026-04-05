import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import Avatar2 from "../components/Avatar2";

const Scanwin = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mycontainer}>
        <View style={styles.scanflex}>
          {/* rendering the two header components from component folder */}
          <Avatar />
          <Avatar2 />
        </View>
        <View style={styles.scanflex1}></View>
        <View style={styles.scanflex2}></View>
        <View style={styles.scanflex3}></View>
        <View style={styles.scanflex4}></View>
        <View style={styles.scanflex5}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Scanwin;

//for stylesheet
const styles = StyleSheet.create({
  mycontainer: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scanflex: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "space-between",
  },
  scanflex1: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scanflex2: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scanflex3: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scanflex4: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scanflex5: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
