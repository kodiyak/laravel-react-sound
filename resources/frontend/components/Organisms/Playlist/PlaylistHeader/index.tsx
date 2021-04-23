import React from 'react'
import Row from '../../../Utils/Row'
import { Heading, Square, Box, Circle } from '@chakra-ui/react'
import Col from '../../../Utils/Col'
import TitlePage from '../../../Ux/Page/TitlePage'
import UxLinkButton from '../../../Utils/UxLinkButton'

const PlaylistHeader: React.FC = () => {
  return (
    <Row h={250} alignItems="center" px={4}>
      <Square size={200} bg="black" rounded="lg" shadow="lg"></Square>
      <Col flex={1} pl={10}>
        <TitlePage mb={4}>Playlist Name</TitlePage>
        <Heading size="md" color="GrayText" fontWeight="normal" userSelect="none">
          A daily collection of electronic music 💖
        </Heading>
        <Row>
          <Box fontSize="sm">
            Created By{' '}
            <UxLinkButton _hover={{ color: 'primary.300' }}>Username S</UxLinkButton>
          </Box>
        </Row>
        <Row
          color="gray.600"
          alignItems="center"
          fontWeight="bold"
          userSelect="none"
        >
          <Box fontSize="sm">260 Songs</Box>
          <Circle size={1} bg="gray.600" mx={2} />
          <Box fontSize="sm">10h 5min</Box>
        </Row>
      </Col>
    </Row>
  )
}

export default PlaylistHeader
