//MY FIRST EVER CUSTOM FUNCTIONAL COMPONENT
import { View, StyleSheet, ImageBackground } from "react-native";

//for the functions(component)
const AppBackgroundImage = () => {
  return (
    <ImageBackground
      style={styles.ImageAppBackground}
      source={{
        uri: "https://morgan-web-school-assignment.neocities.org/bgk.png",
      }}
    />
  );
};

export default AppBackgroundImage;

//for the stylesheet
const styles = StyleSheet.create({
  ImageAppBackground: {
    flex: 2,
    backgroundColor: "lighgray",
  },
});
