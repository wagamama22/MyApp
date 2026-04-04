import { Alert, StyleSheet, Text, View, Image } from "react-native";
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
        {/* Adding image and space */}
        <View style={{ height: 1 }} />
        <SafeAreaView>
          <Image
            style={styles.image}
            source={{
              uri: "https://morgan-web-school-assignment.neocities.org/welbees.png",
            }}
          />
        </SafeAreaView>
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
  image: {
    width: 100,
    height: 80,
    marginLeft: 35,
  },
});
