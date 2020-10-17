import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DingButton from '../components/DingButton';

const image = require("../assets/background_image.jpg");
const DingScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={{
                    width: 1000,
                    height: 1000,

                }}
            >

                    <DingButton/>
               

            </ImageBackground >

        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    image: {
        width: 1000,
        height: 1000,
        alignSelf: "stretch"

    },
    circle: {
        width: 150,
        height: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 100

    }, tinyLogo: {
        width: 150,
        height: 150,
        elevation: 4,
        borderRadius: 100
    },

});
export default DingScreen;