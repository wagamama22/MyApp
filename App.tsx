import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./src/screens/Homescreen";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import Avatar2 from "./src/components/Avatar2";
import Scanwin from "./src/screens/Scanwin";
import Avatar from "./src/components/Avatar";
import ScanImageButtons from "./src/components/ScanImageButtons";
import Timers from "./src/components/Timers";
import OtherBackground from "./src/components/OtherBackground";
import ProductButton from "./src/components/ProductButton";
import { SafeAreaProvider} from "react-native-safe-area-context";
import BottomTabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
