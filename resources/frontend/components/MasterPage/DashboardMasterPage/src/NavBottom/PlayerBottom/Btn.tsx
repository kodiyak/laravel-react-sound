import { IconButton, IconButtonProps } from '@chakra-ui/react'
import React from 'react'

const Btn: React.FC<IconButtonProps> = ({ ...rest }) => {
  return (
    <IconButton
      color="gray.400"
      size="md"
      rounded="2xl"
      bg="transparent"
      _hover={{ color: 'white', bg: 'gray.700' }}
      {...rest}
    />
  )
}

export default Btn
