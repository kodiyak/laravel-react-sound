import { Text, TextProps } from '@chakra-ui/layout'
import React from 'react'

const TextMini: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text fontWeight="bold" textTransform="uppercase" fontSize="xs" {...props}>
      {children}
    </Text>
  )
}

export default TextMini
