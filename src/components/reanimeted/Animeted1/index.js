
import { SafeAreaView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { themes } from "../../../theme"

import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated'


const SIZE = 100.0;

const handleRotation = (progress) => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`
}

const Animeted1 = () => {

    const { theme } = useContext(ThemeContext);
    let activeColors = themes[theme.mode];

    const progress = useSharedValue(1);
    const scale = useSharedValue(2);

    const reanmitedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            borderRadius: (progress.value * SIZE) / 2,
            transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
            backgroundColor: `rgba(${255 * progress.value}, ${105 * progress.value}, ${180 * progress.value}, ${progress.value})`
        }
    }, [])


    /**
     * @function withRepeat function animasyonun tekrarlanması için kullanılır
     * @param animation, 1 adet animasyon ister
     * @param numberOfReps, Animasyonun tekrar etme durumu number değer alır. -1 değeri verildiğinde sürekli tekrar eder
     * @param reverse, Animasyonun başlangıç durumu ters ve ya düze olarak hareket edecektir. Booolen değer alır.
     * @callback AnimationCallback ,animasyon bitişini yakalamanız için callback function tanımlaya bilirsiniz
     */

    /**
     * @function withSpring
     * @param toValue
     * @param userConfig,use config değerleri için https://docs.swmansion.com/react-native-reanimated/docs/api/animations/withSpring/ bilgi alabilirsiniz
     *  @callback AnimationCallback ,animasyon bitişini yakalamanız için callback function tanımlaya bilirsiniz
     */

    withSpring(5, {})
    useEffect(() => {
        progress.value = withRepeat(withSpring(0.5, { damping: 20, mass: 5, stiffness: 50 }), -1, true);
        scale.value = withRepeat(withSpring(1, { damping: 20, mass: 5, stiffness: 50 }), -1, true, (finished) => { console.log(finished) })
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: activeColors.background, alignItems: "center", justifyContent: "center" }}>

            <Animated.View style={[{ width: SIZE, height: SIZE, backgroundColor: 'rgba(255, 105, 180, 0)' }, reanmitedStyle]}>

            </Animated.View>


        </SafeAreaView>
    )
}

export default Animeted1