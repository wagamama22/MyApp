import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* This is for text formatting */}
      <SafeAreaView style={styles.container}>
        <Text style={styles.ftitle}>We are starting</Text>
        <Text style={styles.ftitle1}>
          Morgan's Online Training/Tutorial For Web Development.{" "}
          <Text
            style={styles.ftitle2}
            onPress={() => Alert.alert("rmpowering link  clicked")}
          >
            Empowering
          </Text>{" "}
          Your Web Development Journey
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  ftitle: {
    fontSize: 40,
    fontWeight: 900,
    color: "red",
    textAlign: "center",
  },
  ftitle1: {
    fontSize: 20,
    fontWeight: 300,
    color: "black",
    textAlign: "left",
  },
  ftitle2: {
    fontSize: 20,
    fontWeight: 300,
    color: "red",
    textAlign: "justify",
    textDecorationLine: "underline",
  },
});
