import React from 'react'
import ScrollPage from '../../../../components/Atoms/ScrollPage'
import AlbumHeader from '../../../../components/Organisms/Album/AlbumHeader'
import SongList from '../../../../components/Organisms/Song/SongList'
import Col from '../../../../components/Utils/Col'

const ShowAlbumPage: React.FC = () => {
  return (
    <ScrollPage>
      <AlbumHeader />
      <Col h={1500}>
        <SongList />
      </Col>
    </ScrollPage>
  )
}

export default ShowAlbumPage
