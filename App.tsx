import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  // this is where you insert your javascript functions
  const onLinkPress = () => Alert.alert("a link is pressed");
  const onButtonPress = () => Alert.alert("a button is pressed");
  return (
    <SafeAreaProvider>
      {/* This is for text formatting */}
      <SafeAreaView style={styles.container}>
        <Text style={styles.ftitle}>We are starting</Text>
        <Text style={styles.ftitle1}>
          Morgan's Online Training/Tutorial For Web Development.{" "}
          <Text style={styles.ftitle2} onPress={onLinkPress}>
            Empowering
          </Text>{" "}
          Your Web Development Journey
        </Text>
        {/* Adding image and space */}
        <View style={{ height: 1 }} />
        <SafeAreaView style={styles.myflex}>
          <Pressable onPress={onLinkPress}>
            <Image
              style={styles.image}
              source={{
                uri: "https://morgan-web-school-assignment.neocities.org/welbees.png",
              }}
            />
          </Pressable>
          <TouchableOpacity>
            {/* function call here */}
            <View style={styles.but}>
              <Button title="Click me" onPress={onButtonPress} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={{ height: 1 }} />
        {/* making app compatible both on android and ios */}
        <Text style={styles.ftitle}>
          this is {Platform.OS === "android" ? "Android" : "IOS"} device
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
    fontWeight: "900",
    color: "red",
    textAlign: "center",
  },
  ftitle1: {
    fontSize: 20,
    fontWeight: "300",
    color: "black",
    textAlign: "left",
  },
  ftitle2: {
    fontSize: 20,
    fontWeight: "300",
    color: "red",
    textAlign: "justify",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 80,
    marginLeft: 35,
    // this makes an image a circle
    borderRadius: 50,
  },
  but: {
    width: 100,
    height: 50,
    marginLeft: 40,
    marginTop: 25,
  },
  myflex: {
    flexDirection: "row",
    flex: 0.2,
    //making app compatible both on android and ios
    backgroundColor: Platform.OS === "android" ? "yellow" : "black",
  },
});
