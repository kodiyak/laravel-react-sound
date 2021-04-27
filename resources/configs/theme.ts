import { extendTheme, theme as themeChakra } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  gray: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#373737',
    700: '#2c2c2c',
    800: '#161616',
    900: '#0d0d0d',
  },
  primary: {
    50: '#e0f5ff',
    100: '#afdbff',
    200: '#7ebeff',
    300: '#4d9efe',
    400: '#1c7afc',
    500: '#035ae3',
    600: '#0052b1',
    700: '#004380',
    800: '#002e50',
    900: '#001320',
  },
}
const theme = extendTheme({
  initialColorMode: 'dark',
  shadows: {
    ...themeChakra.shadows,
    outline: 'none',
  },
  fonts: {
    body: '"Rajdhani", sans-serif',
    heading: '"Rajdhani", sans-serif',
  },
  fontSizes: {
    ...themeChakra.fontSizes,
    md: '14px',
  },
  colors,
})

export default theme
