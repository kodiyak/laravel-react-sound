import React from 'react'
import {
  Box,
  BoxProps,
  Button,
  IconButton,
  SimpleGrid,
  useToken,
} from '@chakra-ui/react'
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
  AlbumIcon,
  HomeIcon,
} from '../../../../Ux/Icons'
import LogoHorizontal from '../../../../Ux/Icons/LogoHorizontal'
import MenuLabel from './MenuLabel'
import MenuButton from './MenuButton'
import { useDisclosure } from '../../../../../hooks/useDisclosure'

interface SidebarLeftProps extends BoxProps {}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ ...rest }) => {
  const modalPlaylist = useDisclosure('Modal.Playlist')
  const scrollColor = useToken('colors', 'gray.900')
  const scrollColorHover = useToken('colors', 'gray.700')
  const scrollPadding = '25px'

  const scrollGradient = (color: string) =>
    `linear-gradient(to bottom, transparent ${scrollPadding}, ${color} ${scrollPadding}, ${color} calc(100% - ${scrollPadding}), transparent ${scrollPadding})`

  return (
    <Col
      h="100%"
      pos="relative"
      zIndex={150}
      bgGradient="linear(to-b, gray.900, gray.800)"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: 1,
          bg: 'transparent',
        },
        '&::-webkit-scrollbar-track': {
          width: 1,
          bg: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: scrollGradient(scrollColor),
          rounded: 'sm',
        },
        '&:hover': {
          '&::-webkit-scrollbar-thumb': {
            background: scrollGradient(scrollColorHover),
          },
        },
      }}
      {...rest}
    >
      <Row h={20}>
        <LogoHorizontal h="100%" w="100%" p={4} pr={20} objectFit="contain" />
      </Row>
      <Col px={2} mb={4}>
        <SimpleGrid gap={2}>
          <MenuButton to="/" leftIcon={<HomeIcon size={24} />}>
            Home
          </MenuButton>
        </SimpleGrid>
      </Col>
      <Col px={2} mb={4}>
        <MenuLabel>Discover</MenuLabel>
        <SimpleGrid gap={2}>
          <MenuButton to="/explore" leftIcon={<ExploreIcon size={24} />}>
            Explore
          </MenuButton>
        </SimpleGrid>
      </Col>
      <Col px={2} mb={4}>
        <MenuLabel>Library</MenuLabel>
        <SimpleGrid gap={2}>
          <MenuButton to="/recent" leftIcon={<SongIcon size={24} />}>
            Recent Songs
          </MenuButton>
          <MenuButton to="/library/artists" leftIcon={<MicrophoneIcon size={24} />}>
            Artists
          </MenuButton>
          <MenuButton to="/library/albums" leftIcon={<AlbumIcon size={24} />}>
            Albums
          </MenuButton>
          <MenuButton to="/favorites" leftIcon={<HeartIcon size={24} />}>
            Favorites
          </MenuButton>
        </SimpleGrid>
      </Col>
      <Col px={2} mb={4}>
        <MenuLabel>Contribution</MenuLabel>
        <SimpleGrid gap={2}>
          <MenuButton to="/contributions/tracks" leftIcon={<SongIcon size={24} />}>
            Tracks
          </MenuButton>
          <MenuButton
            to="/contributions/artists"
            leftIcon={<MicrophoneIcon size={24} />}
          >
            Artists
          </MenuButton>
          <MenuButton to="/contributions/albums" leftIcon={<AlbumIcon size={24} />}>
            Albums
          </MenuButton>
        </SimpleGrid>
      </Col>
      <Col px={2} mb={4}>
        <Row alignItems="center" mb={2}>
          <MenuLabel flex={1}>Playlists</MenuLabel>
          <IconButton
            size={'xs'}
            bg="transparent"
            aria-label="New Playlist"
            onClick={() => modalPlaylist.onOpen({})}
          >
            <PlusIcon />
          </IconButton>
        </Row>
        <SimpleGrid gap={2}>
          <MenuButton to="/playlist/playlist-uuid" leftIcon={<ListIcon size={24} />}>
            Playlist 1
          </MenuButton>
          <MenuButton
            to="/playlist/playlist-uuid"
            color="primary.300"
            leftIcon={<ListCheckIcon size={24} />}
          >
            Playlist 2
          </MenuButton>
          <MenuButton to="/playlist/playlist-uuid" leftIcon={<ListIcon size={24} />}>
            Playlist 3
          </MenuButton>
          <MenuButton to="/playlist/playlist-uuid" leftIcon={<ListIcon size={24} />}>
            Playlist 4
          </MenuButton>
          <MenuButton to="/playlist/playlist-uuid" leftIcon={<ListIcon size={24} />}>
            Playlist 5
          </MenuButton>
          <MenuButton to="/playlist/playlist-uuid" leftIcon={<ListIcon size={24} />}>
            Playlist 6
          </MenuButton>
        </SimpleGrid>
      </Col>
    </Col>
  )
}

export default SidebarLeft
