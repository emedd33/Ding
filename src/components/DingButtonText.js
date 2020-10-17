import *  as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

export default function DingButtonText() {
  // const [loaded] = Font.useFonts({
  //   OldLodon: require('../assets/OldLondon.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return <Text style={styles.text} >Ding</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: "OldLondon",
    textAlign:"center",
    fontSize:40
  }
})