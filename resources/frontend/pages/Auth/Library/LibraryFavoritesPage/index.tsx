import React from 'react'
import PageHeader from '../../../../components/Atoms/Headers/PageHeader'
import ScrollPage from '../../../../components/Atoms/ScrollPage/index'
import SongList from '../../../../components/Organisms/Song/SongList'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'

const LibraryFavoritesPage: React.FC = () => {
  return (
    <ScrollPage>
      <Row px={4}>
        <PageHeader title="Your Favorite Songs" />
      </Row>
      <Col h={1500}>
        <SongList />
      </Col>
    </ScrollPage>
  )
}

export default LibraryFavoritesPage
