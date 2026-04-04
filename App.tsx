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
  Modal,
  ImageBackground,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import { useState } from "react";


export default function App() {
  // this is where you insert your javascript functions
  const onLinkPress = () => Alert.alert("a link is pressed");
  const onButtonPress = () => Alert.alert("a button is pressed");
  //declare the use state initial state
  const [state, setState] = useState(20);
  //set the setState
  const increaseNumber = () => setState((prevState) => prevState + 1);
  const decreaseNumber = () => setState(state - 1);
  //use usestate for the modal screen
  //set the useState() modal screen
  const[minvisible, setVisible] = useState(false)

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
        <View style={styles.myflex2}>
          <Text style={styles.ftitle}>
            this is {Platform.OS === "android" ? "Android" : "IOS"} device
          </Text>
          <View style={{ height: 1 }} />
          <View style={styles.but}>
            <Button title="Open Modal" onPress={()=> setVisible(true)} />
          </View>
          <View>
            <Modal visible={minvisible} animationType="slide">
              <Text style={styles.ftitle}>
                his is modal. put your code here
              </Text>
              <View style={{ height: 1 }} />
              <View style={styles.but}>
                <Button title="Close modal" onPress={()=> setVisible(false)} />
              </View>
            </Modal>
          </View>
        </View>
        <ImageBackground style={styles.myimageBackground} source={{uri: "https://morgan-web-school-assignment.neocities.org/bgk.png"}} />
        <View style={styles.myflex1}>
          <View>
            <Button title="increase number" onPress={increaseNumber} />
          </View>
          {/* {state} this is how variables are stored */}
          <Text style={styles.ftitle3}>{state}</Text>
          <View>
            <Button title="decrease number" onPress={decreaseNumber} />
          </View>
        </View>
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
    // this makes Iit responsive across screens
    width: "200%",
    height: "120%",
    marginLeft: 35,
    // this makes an image a circle
    borderRadius: 50,
  },
  but: {
    // this makes Iit responsive across screens
    width: scale(100),
    height: verticalScale(50),
    marginLeft: 180,
    marginTop: 25,
  },
  myflex: {
    flexDirection: "row",
    flex: 1,
    //making app compatible both on android and ios
    backgroundColor: Platform.OS === "android" ? "yellow" : "black",
  },
  myflex1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Platform.OS === "android" ? "black" : "white",
  },
  myflex2: {
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "green" : "white",
  },
  myimageBackground:{
    flex: 2,
    backgroundColor: "lighgray",
  },
  ftitle3: {
    fontSize: 40,
    fontWeight: "500",
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    bottom: 5,
  },
});
