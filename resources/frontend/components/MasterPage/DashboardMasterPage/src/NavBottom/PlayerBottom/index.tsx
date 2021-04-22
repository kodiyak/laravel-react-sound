import React from 'react'
import Col from '../../../../../Utils/Col'
import Row from '../../../../../Utils/Row'
import Slider from './Slider'
import {
  HeartIcon,
  LoopIcon,
  NextIcon,
  PlayIcon,
  PlaylistAddIcon,
  PrevIcon,
  RandomIcon,
  SongIcon,
  VolumeDownIcon,
  VolumeUpIcon,
} from '../../../../../Ux/Icons'
import Btn from './Btn'
import { Box, HStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import SliderSong from './SliderSong'
import SliderSound from './SliderSound'

const PlayerBottom: React.FC = () => {
  return (
    <Row w="100%" h="100%">
      <Row h="100%">
        <HStack gap={2}>
          <Btn aria-label="Add to Playlist">
            <PlaylistAddIcon size={24} />
          </Btn>
          <Btn aria-label="Add to Playlist">
            <HeartIcon size={20} />
          </Btn>
        </HStack>
      </Row>
      <Col flex={1} h="100%">
        <Row h="50%" justifyContent="center">
          <HStack gap={2}>
            <Btn aria-label="Pause/Play" color="primary.300">
              <RandomIcon size={16} />
            </Btn>
            <Btn aria-label="Pause/Play">
              <PrevIcon size={26} />
            </Btn>
            <Btn aria-label="Pause/Play" color="white">
              <PlayIcon size={26} />
            </Btn>
            <Btn aria-label="Pause/Play">
              <NextIcon size={26} />
            </Btn>
            <Btn aria-label="Pause/Play">
              <LoopIcon size={16} />
            </Btn>
          </HStack>
        </Row>
        <Row h="50%" alignItems="center">
          <Text px={4} fontWeight="bold" color="gray.400" userSelect="none">
            1:14
          </Text>
          <SliderSong />
          <Text px={4} fontWeight="bold" color="gray.400" userSelect="none">
            3:40
          </Text>
        </Row>
      </Col>
      <Row h="100%" alignItems="center" pr={4}>
        <Box pr={2} color="gray.400" _hover={{ color: 'white' }}>
          <VolumeDownIcon size={20} />
        </Box>
        <Row w={100}>
          <SliderSound />
        </Row>
        <Box pl={2} color="gray.400" _hover={{ color: 'white' }}>
          <VolumeUpIcon size={20} />
        </Box>
      </Row>
    </Row>
  )
}

export default PlayerBottom
