import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import DingButton from '../components/DingButton';
import Congratulation from "../components/Congratulation"
const image = require("../assets/background_image.jpg");
const DingScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
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
        alignItems: "center",
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
    }
});
export default DingScreen;