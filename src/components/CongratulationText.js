import *  as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CongratulationText = () => {
  return (
        <Text style={styles.text}>Congratulation you dinged a level!</Text>
  )
}

const styles = StyleSheet.create({
  text:{
    textAlign:"center",
    fontSize:30
  }
})

export default CongratulationText