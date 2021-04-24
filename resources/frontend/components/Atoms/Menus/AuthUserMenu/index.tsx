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
import { CogIcon, DashboardIcon } from '../../../Ux/Icons'
import { Link } from 'react-router-dom'

const AuthUserMenu: React.FC = ({ children }) => {
  return (
    <Menu matchWidth>
      <MenuButton cursor="pointer" userSelect="none" as={Box}>
        {children}
      </MenuButton>
      <MenuList border={0} rounded="sm" bg="gray.900">
        <Link to="/settings/profile">
          <MenuItem>
            <Row alignItems="center">
              <Avatar size="sm" ml={1} />
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
      </MenuList>
    </Menu>
  )
}

export default AuthUserMenu
