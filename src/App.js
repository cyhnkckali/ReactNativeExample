
import React from 'react'
import { ThemeProvider } from './context/ThemeContext'

import Home from "./screen/Home"
import About from "./screen/About"

const App = () => {
    return (
        <ThemeProvider>
            {/* <Home /> */}
            <About />
        </ThemeProvider>
    )
}

export default App