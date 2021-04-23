import React, { useState } from 'react'
import Row from '../../../Utils/Row'
import PlayButton from '../../../Atoms/PlayButton/index'
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import UxLinkButton from '../../../Utils/UxLinkButton'

const SongListItem: React.FC = () => {
  const [showPlay, setShowPlay] = useState(false)

  return (
    <Row
      h={14}
      alignItems="center"
      _hover={{ bg: 'gray.700' }}
      userSelect="none"
      fontSize="sm"
      onMouseEnter={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      <PlayButton
        size={8}
        iconSize={20}
        _circle={{ mx: 2, opacity: showPlay ? 1 : 0 }}
      />
      <Box flex={1}>
        <Text fontWeight="bold">Song Title</Text>
      </Box>
      <Box flex={1}>
        <Row>
          <UxLinkButton _hover={{ color: 'primary.300' }}>Artist 1</UxLinkButton>,
          <UxLinkButton _hover={{ color: 'primary.300' }} ml={2}>
            Artist 2
          </UxLinkButton>
        </Row>
      </Box>
      <Box w="10%">
        <Text>Álbum Name</Text>
      </Box>
      <Box w={20} color="gray.300">
        <Text fontWeight="bold">3:40</Text>
      </Box>
    </Row>
  )
}

export default SongListItem
