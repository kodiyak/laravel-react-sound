import { BoxProps, Square } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../../Utils/Col'
import Row from '../../../../Utils/Row'
import { Text } from '@chakra-ui/layout'

const BoxSong: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Row h="100%" alignItems="center" pl={4} {...rest}>
      <Square size={16} rounded="3xl" bg="white"></Square>
      <Col h={16} pl={4}>
        <Text fontSize="sm" fontWeight="bold">
          Music Name
        </Text>
        <Text fontSize="xs" fontWeight="bold" color="gray.300">
          Artist/Band Name
        </Text>
      </Col>
    </Row>
  )
}

export default BoxSong
