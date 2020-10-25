import React from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import FireWork from "./Firework"
const Fireworks = ({ clicked }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const NUM_FIREWORKS = 5
  const loopArray = [...Array(NUM_FIREWORKS).keys()]
  const renderFireworks = (numFireworks) => {
    return loopArray.map(e => renderFirework())
  }
  const renderFirework = () => {
    let leftPosition = Math.random();
    let topPosition = Math.random() - windowWidth * 0.1;

    return <FireWork leftPosition={leftPosition} topPosition={topPosition} windowWidth={windowWidth} />
  }
  return (
    <View style={styles.container}>

      {renderFireworks(NUM_FIREWORKS)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
})
export default Fireworks;