import *  as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';
import CongratulationText from "./CongratulationText"
export default function Congratulation({visible}) {
  const image = require("../assets/wow.jpg");
  const fadeAnim = React.useRef(new Animated.Value(0)).current
  React.useEffect(()=> {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start()
  })
  if (!visible){
    return <View style={styles.containerNotVisible}>
        <CongratulationText/>
    </View>
  }  else {
    return (
      <Animated.View style={{opacity:fadeAnim}}>
      <View style={styles.containerVisible}>
        <ImageBackground
                source={image}
                style={{
                  width: 500,
                  height: 100,
                  justifyContent:"center",
                  padding:10
                  
                }}
                >

          <View style={{backgroundColor:"gray", opacity:0.7, borderRadius:10}}>
            
        <CongratulationText/>
          </View>
        </ImageBackground>

      </View>
                </Animated.View>
  );
}
}


const styles = StyleSheet.create({
  containerNotVisible: {
    width:500,
    height:100,
    opacity:0,
    margin:100,
    marginTop:300

  },
  containerVisible: {
    borderRadius:50,
    width:500,
    height:100,
    opacity:1,
    margin:100,
    marginTop:300

  }
});
