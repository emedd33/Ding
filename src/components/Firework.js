
import React from 'react';
import { View, Animated } from 'react-native';
const Firework = ({ leftPosition, topPosition, windowWidth }) => {
  return (
    <View style={{
      top: topPosition,
      left: leftPosition,
      width: windowWidth * 0.1,
      height: windowWidth * 0.1,
      backgroundColor: "blue",
      opacity: 0.5
    }}></View>
  );
}

export default Firework;