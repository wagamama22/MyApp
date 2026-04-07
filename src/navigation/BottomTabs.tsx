import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scanwin from "../screens/Scanwin";
import Homescreen from "../screens/Homescreen";
import Listscreen from "../screens/Listscreen";
import Productscreen from "../screens/Productscreen";
import Profilescreen from "../screens/Profilescreen";
import { Image } from "react-native";
import { s, vs } from "react-native-size-matters";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Scanwin"
      screenOptions={{
        headerTitle: "",
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: "gray" },
        tabBarLabelStyle: { fontSize: 18 },
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/h-removebg-preview.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
        name="Homescreen"
        component={Homescreen}
      />
      <Tab.Screen
        options={{
          title: "Product",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/search-icon.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
        name="Productscreen"
        component={Productscreen}
      />
      <Tab.Screen
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/list.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
        name="Listscreen"
        component={Listscreen}
      />
      <Tab.Screen
        options={{
          title: "Scan & Win",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/scan-icon.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
        name="Scanwin"
        component={Scanwin}
      />
      <Tab.Screen
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icons/person-removebg-preview.png")}
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
        name="Profilescreen"
        component={Profilescreen}
      />
    </Tab.Navigator>
  );
}
