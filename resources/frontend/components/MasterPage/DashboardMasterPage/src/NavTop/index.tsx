import React from 'react'
import Row from '../../../../Utils/Row'
import { Square, Text } from '@chakra-ui/layout'
import { DownIcon, SearchIcon } from '../../../../Ux/Icons'
import { Avatar, Input, Box, Circle } from '@chakra-ui/react'
import Col from '../../../../Utils/Col'
import TextMini from '../../../../Utils/TextMini'
import UserBox from './src/UserBox/index'

const NavTop: React.FC = () => {
  return (
    <Row
      h={16}
      bgGradient="linear(to-b, gray.900, gray.800)"
      pos="fixed"
      w="100%"
      zIndex={100}
      pl={250 + 20}
      pr={20}
    >
      <Row h="100%" alignItems="center">
        <Square size={10}>
          <SearchIcon size={20} />
        </Square>
        <Input
          bg="transparent"
          fontWeight={800}
          _focus={{
            bg: 'white',
            color: 'black',
            _placeholder: { color: 'gray.800' },
            w: 300,
          }}
          _hover={{ bg: 'rgba(255,255,255,.1)' }}
          rounded="3xl"
          border={0}
          placeholder="Search..."
          w={200}
        />
      </Row>
      <Row ml="auto" h="100%">
        <UserBox />
      </Row>
    </Row>
  )
}

export default NavTop
