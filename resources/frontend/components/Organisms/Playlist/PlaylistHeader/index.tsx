import React from 'react'
import Row from '../../../Utils/Row'
import { Heading, Square, Box, Circle, Input, HStack } from '@chakra-ui/react'
import Col from '../../../Utils/Col'
import TitlePage from '../../../Ux/Page/TitlePage'
import UxLinkButton from '../../../Utils/UxLinkButton'
import { HeartIcon, PlayIcon, SearchIcon } from '../../../Ux/Icons'
import Btn from '../../../MasterPage/DashboardMasterPage/src/NavBottom/PlayerBottom/Btn'
import TextMini from '../../../Utils/TextMini'

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
        <Row rounded="xl" _focusWithin={{ bg: 'gray.700' }}>
          <Square size={10}>
            <SearchIcon />
          </Square>
          <Input
            border={0}
            bg="transparent"
            _focus={{}}
            _hover={{}}
            _active={{}}
            h={10}
            w={300}
            placeholder="Search in playlist..."
            _placeholder={{ color: 'gray.200' }}
          />
        </Row>
        <Row flex={1} pl={2}>
          <HStack gap={2}>
            <Btn aria-label="Play/Pause" size={'md'} bg="gray.700">
              <PlayIcon size={28} />
            </Btn>
            <Row
              h={10}
              w={100}
              userSelect="none"
              rounded="xl"
              bg="gray.700"
              alignItems="center"
              px={1}
              cursor="pointer"
              _hover={{ color: 'white' }}
              _active={{ bg: 'gray.600' }}
              role="group"
            >
              <Square
                size={8}
                rounded="xl"
                bg="gray.600"
                color="red.300"
                // _groupHover={{ color: 'white' }}
              >
                <HeartIcon size={24} />
              </Square>
              <TextMini color="gray.400" pl={4} _groupHover={{ color: 'white' }}>
                2.5m
              </TextMini>
            </Row>
          </HStack>
        </Row>
      </Row>
    </Col>
  )
}

export default PlaylistHeader
