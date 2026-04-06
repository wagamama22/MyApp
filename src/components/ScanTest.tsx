import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const ScanTest = () => {
  return (
    < >
      <Text style={styles.scantest}>It's simple to win the following prices all you need is to</Text>
    </>
  )
}

export default ScanTest

const styles = StyleSheet.create({
  scantest:{
    fontSize: 18,
    fontWeight: 400,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "left",
    fontFamily: "sans-serif",
    
  },
})