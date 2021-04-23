import { Circle, Image } from '@chakra-ui/react'
import React from 'react'
import BoxOverlay from '../../../Utils/BoxOverlay'
import Col from '../../../Utils/Col'
import { Text } from '@chakra-ui/layout'
import Row from '../../../Utils/Row'
import { PlayIcon } from '../../../Ux/Icons'
import PlayButton from '../../../Atoms/PlayButton/index'

const ArtistCard: React.FC = () => {
  return (
    <Col role="group">
      <Circle size={48} pos="relative" overflow="hidden" mx="auto" shadow="lg">
        <Image
          src="https://i.scdn.co/image/1e2171a60ab39e5de7c9646d512eae1eefa4fe47"
          w="100%"
          h="100%"
          objectFit="fill"
          pos="relative"
          zIndex={5}
        />
        <BoxOverlay
          zIndex={10}
          bg="rgba(0,0,0,.5)"
          d="flex"
          alignItems="center"
          justifyContent="center"
          opacity={0}
          _groupHover={{ opacity: 1 }}
        >
          <PlayButton size={16} iconSize={30} />
        </BoxOverlay>
      </Circle>
      <Row justifyContent="center" pt={4}>
        <Text fontWeight="bold" fontSize="lg" textTransform="uppercase">
          Riell
        </Text>
      </Row>
    </Col>
  )
}

export default ArtistCard
