import { Box } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'
import PlaylistHeader from '../../../../components/Organisms/Playlist/PlaylistHeader'
import SongList from '../../../../components/Organisms/Song/SongList/index'
import ScrollPage from '../../../../components/Atoms/ScrollPage/index'

const ShowPlaylistPage: React.FC = () => {
  return (
    <ScrollPage>
      <PlaylistHeader />
      <Col h={1500}>
        <SongList />
      </Col>
    </ScrollPage>
  )
}

export default ShowPlaylistPage
