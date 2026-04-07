import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scanwin from "../screens/Scanwin";
import Homescreen from "../screens/Homescreen";
import Listscreen from "../screens/Listscreen";
import Productscreen from "../screens/Productscreen";
import Profilescreen from "../screens/Profilescreen";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: "gray" },
        tabBarLabelStyle: {fontSize: 18},
      }}
    >
      <Tab.Screen
        options={{ title: "Home" }}
        name="Homescreen"
        component={Homescreen}
      />
      <Tab.Screen
        options={{ title: "Product" }}
        name="Productscreen"
        component={Productscreen}
      />
      <Tab.Screen
        options={{ title: "List" }}
        name="Listscreen"
        component={Listscreen}
      />
      <Tab.Screen
        options={{ title: "Scan & Win" }}
        name="Scanwin"
        component={Scanwin}
      />
      <Tab.Screen
        options={{ title: "Profile" }}
        name="Profilescreen"
        component={Profilescreen}
      />
    </Tab.Navigator>
  );
}
