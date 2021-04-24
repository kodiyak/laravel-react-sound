import React from 'react'
import ScrollPage from '../../../../components/Atoms/ScrollPage'
import PageHeader from '../../../../components/Atoms/Headers/PageHeader'
import Row from '../../../../components/Utils/Row'
import Col from '../../../../components/Utils/Col'
import { SimpleGrid } from '@chakra-ui/react'
import StatUsers from './src/StatUsers'
import StatSongs from './src/StatSongs/index'
import StatPlaylists from './src/StatPlaylists/index'
import StatAlbums from './src/StatAlbums/index'
import StatItem from './src/StatItem/index'
import { AlbumIcon, SongIcon, UserIcon } from '../../../../components/Ux/Icons'

const AdminDashboardPage: React.FC = () => {
  return (
    <ScrollPage>
      <Row px={4}>
        <PageHeader title="Dashboard" description="Admin Dashboard" />
      </Row>
      <Col px={4}>
        <SimpleGrid columns={4} gap={4} mb={4}>
          <StatUsers />
          <StatSongs />
          <StatPlaylists />
          <StatAlbums />
        </SimpleGrid>
        <SimpleGrid columns={3} gap={4} mb={4}>
          <StatItem
            colorScheme="red"
            title="2"
            description="Banned Users"
            icon={<UserIcon size={40} />}
          />
          <StatItem
            colorScheme="red"
            title="5"
            description="Banned Songs"
            icon={<SongIcon size={40} />}
          />
          <StatItem
            colorScheme="red"
            title="2"
            description="Banned Albums"
            icon={<AlbumIcon size={40} />}
          />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={4} mb={4}>
          <StatItem
            colorScheme="orange"
            title="0"
            description="Songs waiting for approve"
            icon={<SongIcon size={40} />}
          />
          <StatItem
            colorScheme="orange"
            title="0"
            description="Albums waiting for approve"
            icon={<AlbumIcon size={40} />}
          />
        </SimpleGrid>
      </Col>
    </ScrollPage>
  )
}

export default AdminDashboardPage
