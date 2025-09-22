import { createContext, useContext } from "react"

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

//Custom Hook -> Returns the useContext(ThemeContext)
export default function useTheme(){

    return useContext(ThemeContext);

}