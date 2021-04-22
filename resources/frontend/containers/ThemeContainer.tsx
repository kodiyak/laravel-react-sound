import React from 'react'
import { ChakraProvider, StylesProvider } from '@chakra-ui/react'
import { theme } from '../../configs'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <StylesProvider value={{}}>{children}</StylesProvider>
    </ChakraProvider>
  )
}

export default ThemeContainer
