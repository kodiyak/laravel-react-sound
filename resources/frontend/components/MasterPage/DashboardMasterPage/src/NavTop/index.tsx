import React from 'react'
import Row from '../../../../Utils/Row'
import { Square, Text } from '@chakra-ui/layout'
import { DownIcon, SearchIcon } from '../../../../Ux/Icons'
import { Avatar, Input, Box, Circle } from '@chakra-ui/react'
import Col from '../../../../Utils/Col'
import TextMini from '../../../../Utils/TextMini'

const NavTop: React.FC = () => {
  return (
    <Row
      h={16}
      bgGradient="linear(to-b, rgba(0,0,0,.5), transparent)"
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
      <Row h="100%" alignItems="center" ml="auto">
        <Circle
          size={10}
          p={1}
          border="2px solid transparent"
          borderColor="green.500"
        >
          <Avatar w="100%" h="100%" />
        </Circle>
        <Col pl={4} pr={2}>
          <TextMini>Username S.</TextMini>
          <Text fontSize="xs" fontWeight="light">
            User
          </Text>
        </Col>
        <Box>
          <DownIcon />
        </Box>
      </Row>
    </Row>
  )
}

export default NavTop
