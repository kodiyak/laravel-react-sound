import React from 'react'
import { Text } from '@chakra-ui/layout'
import { TextProps } from '@chakra-ui/react'

const MenuLabel: React.FC<TextProps> = ({ ...rest }) => {
  return (
    <Text
      fontSize="sm"
      fontWeight="bold"
      color="gray.400"
      userSelect="none"
      {...rest}
    />
  )
}

export default MenuLabel
