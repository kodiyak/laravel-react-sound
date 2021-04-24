import React from 'react'
import { SimpleGrid, Button } from '@chakra-ui/react'
import Row from '../../../../../../components/Utils/Row'
import StatItem from '../StatItem'
import ListItem from '../ListItem'
import { AlbumIcon } from '../../../../../../components/Ux/Icons'

const StatAlbums: React.FC = () => {
  return (
    <StatItem title="2" description="Playlists" icon={<AlbumIcon size={40} />}>
      <SimpleGrid gap={2} pb={2}>
        <ListItem
          icon={<AlbumIcon />}
          title="Album Name"
          description="Made By: User Name"
          to="/album/album-uuid"
        />
        <ListItem
          icon={<AlbumIcon />}
          title="Album Name"
          description="Made By: User Name"
          to="/album/album-uuid"
        />
        <ListItem
          icon={<AlbumIcon />}
          title="Album Name"
          description="Made By: User Name"
          to="/album/album-uuid"
        />
        <Row px={2} mt="auto">
          <Button size="sm" ml="auto">
            See all
          </Button>
        </Row>
      </SimpleGrid>
    </StatItem>
  )
}

export default StatAlbums
