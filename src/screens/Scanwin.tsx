import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.mycontainer}>
        <View style={styles.scanflex}>
          {/* rendering the two header components from component folder */}
          <Avatar />
          <Avatar2 />
        </View>
        <View style={styles.scanflex1}>
          <ScanTest  />
          <View></View>
          <ScanImageButtons  />
        </View>
        <View style={styles.scanflex2}><Timers /></View>
        <View style={styles.scanflex3}>  <OtherBackground />  </View>
        <View style={styles.scanflex4}>  <ProductButton  />  </View>
        <View style={styles.scanflex5}>  <Sharesection  />   </View>
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
    flex: 1.5,
    backgroundColor: "lightgray",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-around",
  },
  scanflex2: {
    flex: 0.8,
    backgroundColor: "lightgray",
  },
  scanflex3: {
    flex: 1.7,
    backgroundColor: "lightgray",
  },
  scanflex4: {
    flex: 0.5,
    backgroundColor: "lightgray",
  },
  scanflex5: {
    flex: 1,
    backgroundColor: "lightgray",
  },
});
