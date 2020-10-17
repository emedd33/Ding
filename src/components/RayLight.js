import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import { getRndInteger, getRandomArbitrary, randn_bm } from '../assets/random';

export default function RayLight() {
  const RADIUS = 400;
  const shiftLeft = randn_bm() * RADIUS - RADIUS / 2;
  const shiftTop = randn_bm() * RADIUS - RADIUS / 2;
  const moveAnim = React.useRef(new Animated.Value(shiftTop)).current;
  const fadeAnim = React.useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  const animateMove = () => {
    Animated.sequence([
    Animated.timing(moveAnim, {
      toValue: -1200,
      duration: 5000,
      useNativeDriver: false
    })]).start()
  }

  const animateFade = () => {
    Animated.sequence([
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false
    })]).start()
  }
  React.useEffect(() => { 
    animateMove()
    animateFade()    
  }, [moveAnim, fadeAnim]);
  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, marginTop: moveAnim }}>
        <Image
          source={require('../assets/ray.png')}
          style={{
            width: 2,
            height: 100,
            marginLeft: shiftLeft,
            marginTop: shiftTop,
          }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
