import React from 'react'
import Row from '../../../Utils/Row'
import { Heading, Square, Box, Circle, Input, HStack } from '@chakra-ui/react'
import Col from '../../../Utils/Col'
import TitlePage from '../../../Ux/Page/TitlePage'
import UxLinkButton from '../../../Utils/UxLinkButton'
import { HeartIcon, PlayIcon, SearchIcon } from '../../../Ux/Icons'
import Btn from '../../../MasterPage/DashboardMasterPage/src/NavBottom/PlayerBottom/Btn'
import TextMini from '../../../Utils/TextMini'
import SearchHeader from '../../../Atoms/Headers/SearchHeader/index'
import LikeHeader from '../../../Atoms/Headers/LikeHeader/index'

const PlaylistHeader: React.FC = () => {
  return (
    <Col p={4}>
      <Row alignItems="center">
        <Square size={32} bg="black" rounded="3xl" shadow="lg"></Square>
        <Col flex={1} pl={10}>
          <TitlePage mb={4}>Playlist Name</TitlePage>
          <Heading size="md" color="GrayText" fontWeight="normal" userSelect="none">
            A daily collection of electronic music 💖
          </Heading>
          <Row>
            <Box fontSize="sm">
              Created By{' '}
              <UxLinkButton _hover={{ color: 'primary.300' }}>
                Username S
              </UxLinkButton>
            </Box>
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
          </HStack>
        </Row>
      </Row>
    </Col>
  )
}

export default PlaylistHeader
