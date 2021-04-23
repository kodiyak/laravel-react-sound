import { Box, Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

const UxLinkButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      bg="transparent"
      _hover={{}}
      _active={{}}
      _focus={{}}
      pos="relative"
      h="auto"
      p={0}
      role="group"
      {...rest}
    >
      {children}
      <Box w="100%" h="1px" bg="white" pos="absolute" bottom={0} left={0} />
      <Box
        w="0"
        h="1px"
        bg={(rest._hover?.color as string) || 'primary.500'}
        pos="absolute"
        bottom={0}
        left={0}
        transition="all .2s ease-in-out"
        _groupHover={{ w: '100%' }}
      />
    </Button>
  )
}

export default UxLinkButton
