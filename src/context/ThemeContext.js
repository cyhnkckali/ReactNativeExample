import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState({ mode: "light" });

    const updateTheme = (newTheme) => {
        let mode;
        if (!newTheme) {
            mode = theme.mode === "dark" ? "light" : "dark";
            newTheme = { mode }
        }
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

