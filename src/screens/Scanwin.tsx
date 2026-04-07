import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";
import Avatar2 from "../components/Avatar2";
import ScanImageButtons from "../components/ScanImageButtons";
import ScanTest from "../components/ScanTest";
import Timers from "../components/Timers";
import OtherBackground from "../components/OtherBackground";
import ProductButton from "../components/ProductButton";
import Sharesection from "../components/Sharesection";

const Scanwin = () => {
  return (
    <SafeAreaView style={styles.mycontainer}>
      <View style={styles.scanflex}>
        <Avatar />
        <Avatar2 />
      </View>
      <View style={styles.scanflex1}>
        <View><ScanTest /></View>
        <ScanImageButtons />
      </View>
      <View style={styles.scanflex2}>
        <Timers />
      </View>
      <View style={styles.scanflex3}>
        {" "}
        <OtherBackground />{" "}
      </View>
      <View style={styles.scanflex4}>
        {" "}
        <ProductButton />{" "}
      </View>
      <View style={styles.scanflex5}>
        {" "}
        <Sharesection />{" "}
      </View>
    </SafeAreaView>
  );
};

export default Scanwin;

//for stylesheet
const styles = StyleSheet.create({
  mycontainer: {
    flex: 1.5,
    backgroundColor: "lightgray",
    bottom: 5,
  },
  scanflex: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    bottom: 90,
  },
  scanflex1: {
    flex: 1.5,
    backgroundColor: "lightgray",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-around",
    bottom: 75,
  },
  scanflex2: {
    flex: 0.7,
    backgroundColor: "lightgray",
    bottom: 83,
  },
  scanflex3: {
    flex: 2,
    backgroundColor: "lightgray",
    bottom: 65,
  },
  scanflex4: {
    flex: 0.5,
    backgroundColor: "lightgray",
    bottom: 19,
  },
  scanflex5: {
    flex: 1,
    backgroundColor: "lightgray",
    bottom: 19,
  },
});
