import React from 'react'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  Avatar,
  Divider,
} from '@chakra-ui/react'
import Row from '../../../Utils/Row'
import TextMini from '../../../Utils/TextMini'
import { Square } from '@chakra-ui/layout'
import { CogIcon, DashboardIcon, LogoutIcon } from '../../../Ux/Icons'
import { Link } from 'react-router-dom'
import App from '../../../../../app/App'
import { useColorRgba } from '../../../../hooks/helpers/useColorRgba'

interface AuthUserMenuProps {
  user: App.Model.User
}

const AuthUserMenu: React.FC<AuthUserMenuProps> = ({ children, user }) => {
  const red = useColorRgba('red.500', 0.2)

  return (
    <Menu matchWidth>
      <MenuButton cursor="pointer" userSelect="none" as={Box}>
        {children}
      </MenuButton>
      <MenuList border={0} rounded="sm" bg="gray.900">
        <Link to="/settings/profile">
          <MenuItem>
            <Row alignItems="center">
              <Avatar size="sm" ml={1} src={user.avatar} />
              <TextMini flex={1} ml={4}>
                Edit Profile
              </TextMini>
            </Row>
          </MenuItem>
        </Link>
        <MenuItem isDisabled>
          <Row alignItems="center">
            <Square size={10}>
              <CogIcon size={20} />
            </Square>
            <TextMini pl={4}>Settings</TextMini>
          </Row>
        </MenuItem>
        <Row h={'1px'} bg="gray.800" my={2} />
        <Link to="/admin/dashboard">
          <MenuItem>
            <Row alignItems="center">
              <Square size={10}>
                <DashboardIcon size={20} />
              </Square>
              <TextMini pl={4}>Admin Dashboard</TextMini>
            </Row>
          </MenuItem>
        </Link>
        <MenuItem
          _hover={{ bg: red }}
          color="red.500"
          onClick={() => {
            App.Resources.AuthResource.logout()
          }}
        >
          <Row alignItems="center" fontSize="sm">
            <Square mr={2} size={10} fontSize="2xl">
              <LogoutIcon />
            </Square>
            Sign Out
          </Row>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default AuthUserMenu
