import *  as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import DingButtonContent from "./DingButtonContent"
import { Audio } from 'expo-av';
import RayLight from './RayLight';
const soundObject = new Audio.Sound();

export default function DingButton() {
  const RayArray = Array.from(Array(100).keys())
  const [clicked, setClicked] = React.useState(false)
  const setUpAudio = async () => {
    await soundObject.loadAsync(require('../assets/ding.mp3'));
  }  
  const toggleClick = () => {
    setClicked(!clicked)
  }
  React.useEffect(() => {
    setUpAudio()
    return () => {
      soundObject.unloadAsync()
    }
  }, [])
  const toggleButton = async () => {
    if (!clicked) {
      setClicked(true)
      console.log("started")
      await soundObject.playAsync()
        .then(() => {
          unclickAfter5Seconds()
        }).catch(err => {
          setClicked(false)
          console.log(err)
        })


    }
  }
  function unclickAfter5Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        setClicked(false)
        console.log("ended")
      }, 5000);
    });
  }
  const renderRayLight = () => <RayLight/>
  return (
    <View style={{marginLeft:0, marginTop:0}}>
      <TouchableOpacity 
        style={clicked ? styles.circleClicked: styles.circleNotClicked}
        activeOpacity={clicked? 1: 0.4}
        onPress={toggleButton}
        >
        <DingButtonContent/>
        {clicked? 
        RayArray.map(() => renderRayLight()): 
        null}
      
      </TouchableOpacity>
    </View>
  );
}

const circle = {
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor: "#DAA520",
    shadowColor:"gray",
    borderColor:"#ECD28F",
    borderWidth:5
    
  }
const styles = StyleSheet.create({
  circleClicked: {
    ...circle,
    opacity: 0.5,
    shadowOpacity:0,
    shadowOffset: {
      width:0,
      height:0
    },
    shadowRadius:3
  },
  circleNotClicked: {
    ...circle,
    opacity: 1,
    shadowOpacity:0.5,
    shadowOffset: {
      width:3,
      height:3
    },
    shadowRadius:3
  },
  });
