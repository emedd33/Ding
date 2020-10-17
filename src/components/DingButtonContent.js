import *  as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import DingButtonText from "./DingButtonText"

export default function DingButtonContent() {
  const image = require("../assets/ring_inscription.png");
  
  return (
      <ImageBackground 
      source={image} 
      style={styles.imageContainer}
      imageStyle={styles.image}
      >
    <DingButtonText/>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.5,
  }, 
  image: {
    borderRadius:100
  }  
});
