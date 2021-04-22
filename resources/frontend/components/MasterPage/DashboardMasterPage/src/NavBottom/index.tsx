import React from 'react'
import { BoxProps } from '@chakra-ui/react'
import Row from '../../../../Utils/Row'
import { Square, Text } from '@chakra-ui/layout'
import Col from '../../../../Utils/Col'
import BoxSong from './BoxSong'
import PlayerBottom from './PlayerBottom'

interface NavBottomProps extends BoxProps {}

const NavBottom: React.FC<NavBottomProps> = ({ ...rest }) => {
  return (
    <Row h={20} w="100%" {...rest}>
      <BoxSong w={200} />
      <Row h="100%" flex={1}>
        <PlayerBottom />
      </Row>
    </Row>
  )
}

export default NavBottom
