import { ButtonProps, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/layout'

const MenuButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Box>
      <Button
        w="100%"
        rounded="3xl"
        bg="transparent"
        _hover={{ bg: 'gray.700' }}
        {...rest}
      >
        <Text px={4} mr="auto">
          {children}
        </Text>
      </Button>
    </Box>
  )
}

export default MenuButton
