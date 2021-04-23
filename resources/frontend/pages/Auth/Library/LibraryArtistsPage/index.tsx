import React from 'react'
import PageHeader from '../../../../components/Atoms/Headers/PageHeader'
import ScrollPage from '../../../../components/Atoms/ScrollPage'
import Row from '../../../../components/Utils/Row'
import SearchHeader from '../../../../components/Atoms/Headers/SearchHeader'
import ArtistsGrid from '../../../../components/Atoms/Grids/ArtistsGrid'
import ArtistCard from '../../../../components/Organisms/Artist/ArtistCard'

const LibraryArtistsPage: React.FC = () => {
  return (
    <ScrollPage>
      <Row px={4}>
        <PageHeader title="Artists">
          <Row>
            <SearchHeader placeholder="Filter..." />
          </Row>
        </PageHeader>
      </Row>
      <ArtistsGrid>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </ArtistsGrid>
    </ScrollPage>
  )
}

export default LibraryArtistsPage
