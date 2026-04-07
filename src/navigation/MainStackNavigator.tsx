import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/Homescreen";
import Listscreen from "../screens/Listscreen";
import Productscreen from "../screens/Productscreen";
import Profilescreen from "../screens/Profilescreen";
import Scanwin from "../screens/Scanwin";



const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Scanwin"
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="Listscreen" component={Listscreen} />
      <Stack.Screen name="Productscreen" component={Productscreen} />
      <Stack.Screen name="Profilescreen" component={Profilescreen} />
      <Stack.Screen name="Scanwin" component={Scanwin} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;