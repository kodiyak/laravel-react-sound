import { SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import Row from '../../../../../../components/Utils/Row'
import { SongIcon } from '../../../../../../components/Ux/Icons'
import StatItem from '../StatItem'
import ListItem from '../ListItem/index'

const StatSongs: React.FC = () => {
  return (
    <StatItem title="4" description="Songs" icon={<SongIcon size={40} />}>
      <SimpleGrid gap={2} pb={2}>
        <ListItem
          icon={<SongIcon />}
          title="Song Name"
          description="Album Name"
          to="/album/album-uuid"
        />
        <ListItem
          icon={<SongIcon />}
          title="Song Name"
          description="Album Name"
          to="/album/album-uuid"
        />
        <ListItem
          icon={<SongIcon />}
          title="Song Name"
          description="Album Name"
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

export default StatSongs
