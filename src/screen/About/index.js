
import { View, Text, StatusBar, Button, SafeAreaView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { themes, text } from "../../theme"

import Buttons from '../../components/basic/Button'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated'


const SIZE = 100.0;

const handleRotation = (progress) => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`
}

const About = () => {

    const { theme, updateTheme } = useContext(ThemeContext);
    let activeColors = themes[theme.mode];

    const progress = useSharedValue(1);
    const scale = useSharedValue(2);

    const reanmitedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            borderRadius: (progress.value * SIZE) / 2,
            transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }]
        }
    }, [])

    useEffect(() => {
        progress.value = withRepeat(withSpring(0.5), -1, true);
        scale.value = withRepeat(withSpring(1), -1, true)
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: activeColors.background, alignItems: "center", justifyContent: "center" }}>

            <Animated.View style={[{ width: SIZE, height: SIZE, backgroundColor: activeColors.primary }, reanmitedStyle]}>

            </Animated.View>


        </SafeAreaView>
    )
}

export default About