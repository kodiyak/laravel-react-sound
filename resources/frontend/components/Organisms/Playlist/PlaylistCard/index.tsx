import React from 'react'
import Col from '../../../Utils/Col'
import { Circle, Heading, Image } from '@chakra-ui/react'
import Row from '../../../Utils/Row'
import CoverItem from './src/CoverItem'
import BoxOverlay from '../../../Utils/BoxOverlay'
import SlideUpGroupHover from '../../../Utils/GroupHover/SlideUpGroupHover'
import { PlayIcon } from '../../../Ux/Icons'
import PlayButton from '../../../Atoms/PlayButton/index'

const PlaylistCard: React.FC = () => {
  return (
    <Col role="group">
      <Col w="100%" h={400} pos="relative">
        <CoverItem
          src="https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg"
          left={0}
          top={0}
          zIndex={10}
          shadow="lg"
          _overlay={{
            bgGradient: 'linear(to-b, rgba(0,0,0,.5), rgba(0,0,0,.9))',
            d: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all .2s ease-in-out',
            opacity: 0,
            _groupHover: { opacity: 1 },
          }}
        >
          <PlayButton size={16} iconSize={30} />
        </CoverItem>
        <CoverItem
          src="https://i1.sndcdn.com/artworks-000558140136-1oew3t-t500x500.jpg"
          left="5%"
          top="5%"
          zIndex={9}
          _image={{ opacity: 0.2 }}
          //   _overlay={{ bg: 'rgba(0,0,0,.8)' }}
        >
          Salve
        </CoverItem>
        <CoverItem
          src="https://pbs.twimg.com/profile_images/1221312423333965824/iZlNOYJY_400x400.jpg"
          left="10%"
          top="10%"
          zIndex={8}
          _image={{ opacity: 0.1 }}
          //   _overlay={{ bg: 'rgba(0,0,0,.9)' }}
        >
          Salve
        </CoverItem>
      </Col>
      <Col>
        <Row py={2}>
          <Heading size="md">Playlist Title</Heading>
        </Row>
      </Col>
    </Col>
  )
}

export default PlaylistCard
