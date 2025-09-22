import { useEffect, useState } from 'react';
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import Card from './components/Card';
import ThemeBtn from './components/ThemedButton';
import ThemeButton from './components/ThemedButton';

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  //ActualChange in the Theme
  useEffect(() => {
    document.getElementById('html').classList.remove("dark","light");
    document.getElementById('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{darkTheme,lightTheme,themeMode}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ ThemeContextProvider>
  )
}

export default App
