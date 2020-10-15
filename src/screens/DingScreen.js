import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DingButton from '../components/DingButton';

const image = require("../assets/background_image.jpg");
const ring = "https://i.pinimg.com/originals/3b/31/e3/3b31e34debef0e079a148d8941af59de.jpg";
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

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <DingButton />
                </View>

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