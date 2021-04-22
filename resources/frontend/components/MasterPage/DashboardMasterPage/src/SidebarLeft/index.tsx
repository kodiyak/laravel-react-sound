import React from 'react'
import { Box, BoxProps, Button, IconButton, SimpleGrid } from '@chakra-ui/react'
import Col from '../../../../Utils/Col'
import Row from '../../../../Utils/Row'
import {
  ExploreIcon,
  HeartIcon,
  ListCheckIcon,
  ListIcon,
  PlusIcon,
  MicrophoneIcon,
  SongIcon,
} from '../../../../Ux/Icons'
import LogoHorizontal from '../../../../Ux/Icons/LogoHorizontal'
import MenuLabel from './MenuLabel'
import MenuButton from './MenuButton'

interface SidebarLeftProps extends BoxProps {}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ ...rest }) => {
  return (
    <Col
      h="100%"
      pos="relative"
      zIndex={150}
      bgGradient="linear(to-b, gray.900, gray.800)"
      overflowY="auto"
      {...rest}
    >
      <Row h={20}>
        <LogoHorizontal h="100%" w="100%" p={4} pr={20} objectFit="contain" />
      </Row>
      <Col px={2} mb={4}>
        <MenuLabel>Discover</MenuLabel>
        <SimpleGrid gap={2}>
          <MenuButton leftIcon={<ExploreIcon size={24} />}>Explore</MenuButton>
        </SimpleGrid>
      </Col>
      <Col px={2} mb={4}>
        <MenuLabel>Library</MenuLabel>
        <SimpleGrid gap={2}>
          <MenuButton leftIcon={<SongIcon size={24} />}>Rescent Songs</MenuButton>
          <MenuButton leftIcon={<MicrophoneIcon size={24} />}>Artists</MenuButton>
          <MenuButton leftIcon={<HeartIcon size={24} />}>Favorite</MenuButton>
        </SimpleGrid>
      </Col>
      <Col px={2} mb={4}>
        <Row alignItems="center">
          <MenuLabel flex={1}>Playlists</MenuLabel>
          <IconButton size={'sm'} bg="transparent" aria-label="New Playlist">
            <PlusIcon />
          </IconButton>
        </Row>
        <SimpleGrid gap={2}>
          <MenuButton leftIcon={<ListIcon size={24} />}>Playlist 1</MenuButton>
          <MenuButton color="primary.300" leftIcon={<ListCheckIcon size={24} />}>
            Playlist 2
          </MenuButton>
          <MenuButton leftIcon={<ListIcon size={24} />}>Playlist 3</MenuButton>
          <MenuButton leftIcon={<ListIcon size={24} />}>Playlist 4</MenuButton>
          <MenuButton leftIcon={<ListIcon size={24} />}>Playlist 5</MenuButton>
          <MenuButton leftIcon={<ListIcon size={24} />}>Playlist 6</MenuButton>
        </SimpleGrid>
      </Col>
    </Col>
  )
}

export default SidebarLeft
