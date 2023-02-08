
import { View, Text, StatusBar, Button, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { themes, text } from "../../theme"

const Home = () => {

    const { theme, updateTheme } = useContext(ThemeContext);
    let activeColors = themes[theme.mode];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: activeColors.background }}>
            <StatusBar backgroundColor={theme.mode === "light" ? themes.light.background : themes.dark.background} barStyle={theme.mode === "light" ? "dark-content" : "light-content"} />
            <Text style={{ color: activeColors.text, fontSize: text.titlemd }}>Home screen</Text>
            <Button title='Change Theme' onPress={() => { updateTheme() }} color={activeColors.primary} />

        </SafeAreaView>
    )
}

export default Home