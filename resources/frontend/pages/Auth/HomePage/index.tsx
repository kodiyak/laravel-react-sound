import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import DashboardMasterPage from '../../../components/MasterPage/DashboardMasterPage/index'
import PlaylistCard from '../../../components/Organisms/Playlist/PlaylistCard/index'
import Col from '../../../components/Utils/Col'
import Row from '../../../components/Utils/Row'

const HomePage: React.FC = () => {
  return (
    <DashboardMasterPage>
      <Box h={1500} px={4}>
        <Col>
          <Row mt={4} mb={2}>
            <Heading size="2xl">Home</Heading>
          </Row>
        </Col>
        <Col>
          <Row mt={4} mb={2}>
            <Heading size="lg" fontWeight={300}>
              My Library
            </Heading>
          </Row>
          <SimpleGrid columns={5} gap={4}>
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </SimpleGrid>
        </Col>
      </Box>
    </DashboardMasterPage>
  )
}

export default HomePage
