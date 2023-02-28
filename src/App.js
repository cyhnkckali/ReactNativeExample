
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'

import Home from "./screen/Home"
import Animeted1 from "./components/reanimeted/Animeted1"
import Animeted2 from "./components/reanimeted/Animeted2"
import Animeted3 from "./components/reanimeted/Animeted3"
import Animeted4 from "./components/reanimeted/Animeted4"
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <ThemeProvider>
                {/* <Home /> */}
                {/* <Animeted1 /> */}
                {/* <Animeted2 /> */}
                {/* <Animeted3 /> */}
                <Animeted4 />
            </ThemeProvider>
        </GestureHandlerRootView>
    )
}

export default App