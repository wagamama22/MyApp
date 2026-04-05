import {
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  Button,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

//define the proops return type
type Section2Props = {
  onLinkPress: () => void;
  onButtonPress: () => void;
};

const Section2 = ({onLinkPress, onButtonPress} : Section2Props) => {
  return (
    <>
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
    </>
  );
};

export default Section2;

//create the stylesheet
const styles = StyleSheet.create({
  image: {
    // this makes Iit responsive across screens
    width: scale(80),
    height: scale(80),
    marginLeft: 35,
    // this makes an image a circle
    borderRadius: 40,
    bottom: 10,
  },
  but: {
    // this makes Iit responsive across screens
    width: scale(100),
    height: verticalScale(50),
    marginLeft: 160,
    marginTop: 25,
  },
});
