import { View, Text, StatusBar,Switch } from 'react-native'
import React, { useState } from 'react'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue,  withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';


const AnimatedStatusBar =Animated.createAnimatedComponent(StatusBar);

const COLORS = {
    dark: {
        background: '#121212',
        circle: '#252525',
        text: '#f8f8f8',
    },
    light: {
        background: '#f8f8f8',
        circle: '#fff',
        text: '#1e1e1e',
    }
}

const SWITCH_COLOR = {
    true: 'rgba(256,0,256,0.5)',
    false: 'rgba(256,0,256,0.2)',
}

type Theme = 'light' | 'dark';

const Animeted4 = () => {

    const [theme, setTheme] = useState<Theme>('light');

    const onValueChange=(toggled: boolean )=>{
        setTheme(toggled?'dark':'light');
        StatusBar.setBarStyle(toggled?'light-content':'dark-content');
        if(Platform.OS==='android'){
            StatusBar.setBackgroundColor(toggled? COLORS.dark.background:COLORS.light.background,);
        }
    };


    const progress = useDerivedValue(()=>{return theme==='dark'? withTiming(1) : withTiming(0)},[theme]);

    const rStyle = useAnimatedStyle(()=>{

        const backgroundColor=interpolateColor(progress.value,[0,1],[
            COLORS.light.background,COLORS.dark.background
        ])

        return {
            backgroundColor,
        }
    });

    const rStyleCircle = useAnimatedStyle(()=>{

        const backgroundColor=interpolateColor(progress.value,[0,1],[
            COLORS.light.circle,COLORS.dark.circle
        ])

        return {
            backgroundColor,
        }
    });


    const rStyleText = useAnimatedStyle(()=>{

        const color=interpolateColor(progress.value,[0,1],[
            COLORS.light.text,COLORS.dark.text
        ])

        return {
            color,
        }
    });

    return (
        <Animated.View style={[styles.container,rStyle]}>
            <Animated.Text style={[{marginBottom:50},rStyleText]}>Open up App.tsx to start working on your App!</Animated.Text>
            <Animated.View style={[styles.circle,rStyleCircle]}>
            <Switch value={theme==='dark'}  onValueChange={onValueChange} trackColor={SWITCH_COLOR} thumbColor={theme==='dark'?'rgba(256,0,256,1)' :'#F782F7'}/>
            </Animated.View>
        </Animated.View>
    )
}

const SIZE=Dimensions.get('window').width*0.7;

const styles = StyleSheet.create({
    container:{
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' 
    },
    circle:{
        width:SIZE,
        height:SIZE,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:SIZE/2,
        elevation:9,
    },
    text:{

    }
})

export default Animeted4