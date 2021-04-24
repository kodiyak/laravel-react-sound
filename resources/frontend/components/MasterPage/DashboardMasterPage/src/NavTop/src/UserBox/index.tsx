import { Circle, Avatar, Box } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../../../../Utils/Col'
import Row from '../../../../../../Utils/Row'
import TextMini from '../../../../../../Utils/TextMini'
import { DownIcon } from '../../../../../../Ux/Icons'
import { Text } from '@chakra-ui/layout'
import AuthUserMenu from '../../../../../../Atoms/Menus/AuthUserMenu/index'

const UserBox: React.FC = () => {
  return (
    <AuthUserMenu>
      <Row h="100%" alignItems="center" userSelect="none" cursor="pointer">
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
    </AuthUserMenu>
  )
}

export default UserBox
