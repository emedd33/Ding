import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import DingButton from '../components/DingButton';
import Congratulation from "../components/Congratulation"
import Fireworks from 'react-native-fireworks'
const image = require("../assets/background_image.jpg");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DingScreen = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={{
                    width: windowWidth,
                    height: windowHeight,

                }}
            >
                {clicked ? <Fireworks height={windowHeight * 0.8} width={windowWidth * 0.8} /> : null}
                <View style={styles.congratulationContainer}>

                    <Congratulation visible={clicked} />
                </View>
                <View style={styles.buttonContainer}>
                    <DingButton clicked={clicked} setClicked={setClicked} />
                </View>


            </ImageBackground >

        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        alignItems: "center",
        width: windowWidth,
        height: windowHeight
    },
    buttonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    congratulationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fireworksContainer: {
        flex: 2
    }
});
export default DingScreen;