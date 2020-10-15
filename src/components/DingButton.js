import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button, Image } from 'react-native';
import { Audio } from 'expo-av';
const soundObject = new Audio.Sound();
const DingButton = () => {
  const [clicked, setClicked] = useState(false)
  const setUpAudio = async () => {
    await soundObject.loadAsync(require('../assets/ding.mp3'));
  }
  useEffect(() => {
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

  return (

    <TouchableOpacity onPress={() => toggleButton()} activeOpacity={1} >
      <View style={clicked ? styles.buttonPressed : styles.buttonNotPressed}>
        <ImageBackground
          imageStyle={styles.ringImage}
          style={styles.imageBackgroundStyle}
          source={require("../assets/ring_inscription.png")}
        >
          <View style={{ width: 150, height: 150, justifyContent: "center" }}>

            <Text style={{ textAlign: "center" }}>Ding</Text>
          </View>
        </ImageBackground>
      </View>

    </TouchableOpacity >

  );
}
const constStyles = StyleSheet.create({
  imageBackgroundStyle: {
    resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'
  },
  buttonStyle: {
    width: 150,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 100,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dingTitle: {
    fontSize: 20,
  },

})

const styles = StyleSheet.create({
  buttonNotPressed: {
    ...constStyles.buttonStyle,
  },
  buttonPress: {
    ...constStyles.buttonStyle,
  },
  dingTitleClicked: {
    ...constStyles.dingTitle,
  },
  dingTitleNotClicked: {
    ...constStyles.dingTitle,
  },
  ringImage: {
    width: 150,
    height: 150,
    elevation: 4,
    borderRadius: 100
  },
})

export default DingButton;