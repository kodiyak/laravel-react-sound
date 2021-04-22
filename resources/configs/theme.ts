import { extendTheme, theme as themeChakra } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  gray: {
    50: '#f0f0fc',
    100: '#e4e4f5',
    200: '#d5d5eb',
    300: '#cacae3',
    400: '#b6b6d4',
    500: '#9090ad',
    600: '#4d4d63',
    700: '#39394d',
    800: '#2a2a3b',
    900: '#1a1a26',
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
