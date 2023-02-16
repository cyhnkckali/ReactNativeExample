
import { StyleSheet, View, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import { themes } from "../../../theme"

import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'



const SIZE = 100.0;
const CIRCLE_RADIUS = (Dimensions.get("screen").width - 20) / 2;

const Animeted2 = () => {

    const { width, height } = useWindowDimensions()

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: (event) => {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

            if (distance < CIRCLE_RADIUS + SIZE / 2) {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        }
    })


    const rStyle = useAnimatedStyle(() => {

        return {
            transform: [{ translateX: translateX.value }, { translateY: translateY.value }]
        }

    })

    return (
        <View style={styles.container}>

            <View style={styles.cirle_radius}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.square, rStyle]}></Animated.View>
                </PanGestureHandler>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: themes.color.background, alignItems: "center", justifyContent: "center"
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0,0,256,0.5)',
        borderRadius: 20,
    },
    cirle_radius: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 5,
        borderColor: 'rgba(0,0,256,0.5)',
    }

})


export default Animeted2