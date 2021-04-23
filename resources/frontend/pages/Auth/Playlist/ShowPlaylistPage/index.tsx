import { Box } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'
import PlaylistHeader from '../../../../components/Organisms/Playlist/PlaylistHeader'
import SongList from '../../../../components/Organisms/Song/SongList/index'

const ShowPlaylistPage: React.FC = () => {
  return (
    <Col w="100%" h="100%" pos="absolute" left={0} top={0}>
      <Box pos="relative" w="100%" h="100%" overflowY="scroll" pt={16}>
        <PlaylistHeader />

        <Col h={1500}>
          <SongList />
        </Col>
      </Box>
    </Col>
  )
}

export default ShowPlaylistPage
