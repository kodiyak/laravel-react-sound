import React from 'react'
import AlbumsGrid from '../../../../components/Atoms/Grids/AlbumsGrid'
import PageHeader from '../../../../components/Atoms/Headers/PageHeader'
import SearchHeader from '../../../../components/Atoms/Headers/SearchHeader'
import ScrollPage from '../../../../components/Atoms/ScrollPage/index'
import AlbumCard from '../../../../components/Organisms/Album/AlbumCard'
import Row from '../../../../components/Utils/Row'

const LibraryAlbumsPage: React.FC = () => {
  return (
    <ScrollPage>
      <Row px={4}>
        <PageHeader title="Albums">
          <Row>
            <SearchHeader placeholder="Filter..." />
          </Row>
        </PageHeader>
      </Row>
      <AlbumsGrid px={4}>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </AlbumsGrid>
    </ScrollPage>
  )
}

export default LibraryAlbumsPage
