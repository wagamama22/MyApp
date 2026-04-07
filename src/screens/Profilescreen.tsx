import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Profilescreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
      {" "}
      <Text>Profilescreen</Text>
    </SafeAreaView>
  );
};

export default Profilescreen;
