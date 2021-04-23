import { Box } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'
import PlaylistHeader from '../../../../components/Organisms/Playlist/PlaylistHeader'

const ShowPlaylistPage: React.FC = () => {
  return (
    <Col w="100%" h="100%" pos="absolute" left={0} top={0}>
      <Box pos="relative" w="100%" h="100%" overflowY="scroll" pt={20}>
        <PlaylistHeader />
        <Row h={10} bg="black" pos="sticky" top={0} left={0}></Row>
        <Row h={1500}></Row>
      </Box>
    </Col>
  )
}

export default ShowPlaylistPage
