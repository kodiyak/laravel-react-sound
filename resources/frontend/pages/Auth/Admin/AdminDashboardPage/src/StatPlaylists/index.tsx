import { SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import Row from '../../../../../../components/Utils/Row'
import { ListIcon } from '../../../../../../components/Ux/Icons'
import StatItem from '../StatItem'
import ListItem from '../ListItem'

const StatPlaylists: React.FC = () => {
  return (
    <StatItem title="40" description="Playlists" icon={<ListIcon size={40} />}>
      <SimpleGrid gap={2} pb={2}>
        <ListItem
          icon={<ListIcon />}
          title="Playlist Name"
          description="Made By: User Name"
          to="/playlist/playlist-uuid"
        />
        <ListItem
          icon={<ListIcon />}
          title="Playlist Name"
          description="Made By: User Name"
          to="/playlist/playlist-uuid"
        />
        <ListItem
          icon={<ListIcon />}
          title="Playlist Name"
          description="Made By: User Name"
          to="/playlist/playlist-uuid"
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

export default StatPlaylists
