import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import PlaylistCard from '../../../components/Organisms/Playlist/PlaylistCard/index'
import Col from '../../../components/Utils/Col'
import Row from '../../../components/Utils/Row'
import ArtistCard from '../../../components/Organisms/Artist/ArtistCard/index'
import TitlePage from '../../../components/Ux/Page/TitlePage'
import ArtistsGrid from '../../../components/Atoms/Grids/ArtistsGrid/index'
import PlaylistGrid from '../../../components/Atoms/Grids/PlaylistGrid/index'
import PageHeader from '../../../components/Atoms/Headers/PageHeader/index'
import App from '../../../../app/App'
import { useCollect } from '../../../hooks/useCollect'

const HomePage: React.FC = () => {
  const playlists = useCollect(App.Collections.playlists)

  return (
    <>
      <Box h={1500} px={4}>
        <Col>
          <PageHeader title="Home" />
        </Col>
        <Col>
          <Row mt={4} mb={2}>
            <Heading size="lg" fontWeight={300}>
              My Playlists
            </Heading>
          </Row>
          <Row>{JSON.stringify(playlists.data)}</Row>
          <PlaylistGrid>
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </PlaylistGrid>
        </Col>
        <Col mt={8}>
          <Row mt={4} mb={2}>
            <Heading size="lg" fontWeight={300}>
              Artists
            </Heading>
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
        </Col>
      </Box>
    </>
  )
}

export default HomePage
