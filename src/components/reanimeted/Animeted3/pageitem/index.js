import { View, Dimensions, StyleSheet, StatusBar, Platform } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';


const { width, height } = Dimensions.get("window");

const SIZE = width * 0.7;

const PageItem = ({ index = null, title = '', translateX, }) => {

    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]




    const rStyle = useAnimatedStyle(() => {

        const scale = interpolate(
            translateX?.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const borderRadius = interpolate(
            translateX?.value,
            inputRange,
            [0, SIZE / 2, 0],
            Extrapolate.CLAMP
        )

        return ({
            borderRadius,
            transform: [{ scale }]
        })
    })


    const rTextViewStyle = useAnimatedStyle(() => {

        const translateY = interpolate(translateX?.value, inputRange, [height / 2, 0, -height / 2], Extrapolate.CLAMP);

        const opacity = interpolate(translateX?.value, inputRange, [-2, 1, -2], Extrapolate.CLAMP);

        return ({
            opacity,
            transform: [{ translateY }],
        })
    })


    const rTextStyle = useAnimatedStyle(() => {
        const fontSize = interpolate(translateX?.value, inputRange, [-2, 52, -2], Extrapolate.CLAMP);
        return ({
            fontSize,
        })
    })

    if (Platform.OS === "android") {
        StatusBar.setHidden(true)
    }

    return (
        <View style={[styles.container, { backgroundColor: `rgba(0,0,256,0.${index + 2})` }]}>


            <Animated.View style={[styles.squre, rStyle]} />

            <Animated.View style={[{ position: "absolute" }, rTextViewStyle]}>
                <Animated.Text style={[styles.text, rTextStyle]}>{title}</Animated.Text>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height,
        width,
        alignItems: "center",
        justifyContent: 'center'
    },
    squre: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0,0,256,0.4)',
    },
    text: {
        fontSize: 52,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500"
    }
})

export default PageItem