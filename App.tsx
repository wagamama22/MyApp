import { NavigationContainer } from '@react-navigation/native'; 
import { StyleSheet, Text, View } from 'react-native';
//import homescreen from screens
import Homescreen from "./src/screens/Homescreen";
// import MainStackNavigator from './src/navigation/MainStackNavigator';

export default function App() {
  return (
    //render homescreen
    <Homescreen />

    //render the navigation stack and wrapp it in a navigation container
    // <NavigationContainer>
    //   <MainStackNavigator />
    // </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


