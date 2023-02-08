
import { View, Text, StatusBar, Platform, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const App = () => {


    useEffect(() => {
        StatusBar.setBarStyle("dark-content");
        if (Platform.OS === 'android') StatusBar.setBackgroundColor("#fff");
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>App</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default App