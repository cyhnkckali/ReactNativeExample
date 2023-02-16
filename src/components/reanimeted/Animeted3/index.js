
import { StyleSheet, } from 'react-native'
import React from 'react'


import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import PageItem from './pageitem'

const WORDS = ["What's", 'up', 'Mobile', 'devs?']

const Animeted2 = () => {

    const translateX = useSharedValue(0);

    const scrollHanler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    })

    return (
        <>

            <Animated.ScrollView
                onScroll={scrollHanler}
                scrollEventThrottle={16}
                style={styles.container}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            >
                {
                    WORDS.map((title, index) => {
                        return (
                            <PageItem index={index} title={title} key={index.toString()} translateX={translateX} />
                        )
                    })

                }
            </Animated.ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


})


export default Animeted2