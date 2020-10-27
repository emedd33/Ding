import *  as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated, Dimensions } from 'react-native';
import CongratulationText from "./CongratulationText"
const windowWidth = Dimensions.get('window').width;

export default function Congratulation({ visible }) {
  const image = require("../assets/wow.jpg");
  const fadeAnim = React.useRef(new Animated.Value(0)).current
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start()
  })
  if (!visible) {
    return <View style={styles.containerNotVisible}>
      <CongratulationText />
    </View>
  } else {
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <View style={styles.containerVisible}>
          <ImageBackground
            source={image}
            style={{
              height: 100,
              justifyContent: "center",
              padding: 10

            }}
          >

            <View style={{ opacity: 0.8, borderRadius: 10, minWidth: 0.9 * windowWidth }}>

              <CongratulationText />
            </View>
          </ImageBackground>

        </View>
      </Animated.View>
    );
  }
}


const styles = StyleSheet.create({
  containerNotVisible: {
    height: 100,
    opacity: 0,
    margin: 100,

  },
  containerVisible: {
    borderRadius: 50,
    height: 100,
    opacity: 1,
    margin: 100,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 3

  }
});
