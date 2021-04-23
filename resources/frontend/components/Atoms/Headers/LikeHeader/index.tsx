import { Square } from '@chakra-ui/react'
import React from 'react'
import Row from '../../../Utils/Row'
import TextMini from '../../../Utils/TextMini'
import { HeartIcon } from '../../../Ux/Icons'

const LikeHeader: React.FC = () => {
  return (
    <Row
      h={10}
      w={100}
      userSelect="none"
      rounded="xl"
      bg="gray.700"
      alignItems="center"
      px={1}
      cursor="pointer"
      _hover={{ color: 'white' }}
      _active={{ bg: 'gray.600' }}
      role="group"
    >
      <Square
        size={8}
        rounded="xl"
        bg="gray.600"
        color="red.300"
        // _groupHover={{ color: 'white' }}
      >
        <HeartIcon size={24} />
      </Square>
      <TextMini color="gray.400" pl={4} _groupHover={{ color: 'white' }}>
        2.5m
      </TextMini>
    </Row>
  )
}

export default LikeHeader
