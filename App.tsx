
import { StyleSheet, Text, View } from 'react-native';
import{SafeAreaProvider, SafeAreaView}from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.ftitle}>We are starting</Text>
    </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    
  },
  ftitle:{
    fontSize: 40,
    fontWeight: 900,
    color: "red",
  }
  
  
});
