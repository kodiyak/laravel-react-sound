import React from 'react'
import Col from '../../../Utils/Col'
import { Heading, SimpleGrid, Square, Image, Circle, Box } from '@chakra-ui/react'
import Row from '../../../Utils/Row'
import UxLinkButton from '../../../Utils/UxLinkButton'
import BoxOverlay from '../../../Utils/BoxOverlay'
import PlayButton from '../../../Atoms/PlayButton/index'

const AlbumCard: React.FC = () => {
  return (
    <Col>
      <Square
        size={250}
        bg="black"
        shadow="lg"
        mx="auto"
        pos="relative"
        role="group"
      >
        <Image
          w="100%"
          h="100%"
          src="https://i1.sndcdn.com/artworks-pAZp5TpIz8rhy2Jc-tWnSKw-t500x500.jpg"
          pos="relative"
          zIndex={5}
        />
        <BoxOverlay
          zIndex={10}
          bg="rgba(0,0,0,.8)"
          alignItems="center"
          justifyContent="center"
          opacity={0}
          _groupHover={{ opacity: 1 }}
        >
          <PlayButton size={16} iconSize={30} />
        </BoxOverlay>
      </Square>
      <Col w={250} mx="auto" pt={3}>
        <SimpleGrid gap={1}>
          <Box>
            <UxLinkButton
              color="white"
              fontSize="lg"
              underscoreColor="transparent"
              _hover={{ color: 'primary.200' }}
            >
              Rostage
            </UxLinkButton>
          </Box>
          <Row alignItems="center">
            <UxLinkButton
              underscoreColor="transparent"
              color="gray.400"
              _hover={{ color: 'primary.400' }}
            >
              RIELL
            </UxLinkButton>
            <Circle mx={2} size={1} bg="gray.500" />
            <UxLinkButton
              underscoreColor="transparent"
              color="gray.400"
              _hover={{ color: 'primary.400' }}
            >
              Besomorph
            </UxLinkButton>
          </Row>
        </SimpleGrid>
      </Col>
    </Col>
  )
}

export default AlbumCard
