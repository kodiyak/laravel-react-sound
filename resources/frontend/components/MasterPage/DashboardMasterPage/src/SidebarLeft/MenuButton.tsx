import { ButtonProps, Button, Box } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/layout'
import { Link, LinkProps } from 'react-router-dom'

interface MenuButtonProps extends ButtonProps {
  to?: LinkProps['to']
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, to, ...rest }) => {
  const MenuBtn: React.FC = () => (
    <Button
      w="100%"
      rounded="3xl"
      bg="transparent"
      _hover={{ bg: 'gray.800' }}
      {...rest}
    >
      <Text px={4} mr="auto">
        {children}
      </Text>
    </Button>
  )

  return (
    <Box>
      {to ? (
        <Link to={to}>
          <MenuBtn />
        </Link>
      ) : (
        <MenuBtn />
      )}
    </Box>
  )
}

export default MenuButton
