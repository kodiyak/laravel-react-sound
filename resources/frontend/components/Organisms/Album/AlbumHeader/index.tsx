import { Square, Box, Circle, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import LikeHeader from '../../../Atoms/Headers/LikeHeader'
import SearchHeader from '../../../Atoms/Headers/SearchHeader'
import Btn from '../../../MasterPage/DashboardMasterPage/src/NavBottom/PlayerBottom/Btn'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import UxLinkButton from '../../../Utils/UxLinkButton'
import { PlayIcon, PlusIcon } from '../../../Ux/Icons'
import TitlePage from '../../../Ux/Page/TitlePage'

const AlbumHeader: React.FC = () => {
  return (
    <Col p={4}>
      <Row alignItems="center">
        <Square size={32} bg="black" rounded="3xl" shadow="lg"></Square>
        <Col flex={1} pl={10}>
          <TitlePage mb={4}>Album Name</TitlePage>
          <Row>
            <Row fontSize="sm" alignItems="center">
              Artist
              <Circle size={1} bg="gray.600" mx={2} />
              <UxLinkButton _hover={{ color: 'primary.300' }}>RIELL</UxLinkButton>
            </Row>
          </Row>
          <Row
            color="gray.600"
            alignItems="center"
            fontWeight="bold"
            userSelect="none"
          >
            <Box fontSize="sm">260 Songs</Box>
            <Circle size={1} bg="gray.600" mx={2} />
            <Box fontSize="sm">10h 5min</Box>
          </Row>
        </Col>
      </Row>
      <Row mt={2} h={10}>
        <SearchHeader />
        <Row flex={1} pl={2}>
          <HStack gap={2}>
            <Btn aria-label="Play/Pause" size={'md'} bg="gray.700">
              <PlayIcon size={28} />
            </Btn>
            <LikeHeader />
            <Button rounded="xl" leftIcon={<PlusIcon size={20} />}>
              Add a track
            </Button>
          </HStack>
        </Row>
      </Row>
    </Col>
  )
}

export default AlbumHeader
