import { SimpleGrid, Square } from '@chakra-ui/react'
import React from 'react'
import FullPage from '../../../../components/Atoms/FullPage/index'
import { AlbumIcon, MicrophoneIcon, SongIcon } from '../../../../components/Ux/Icons'
import ContributionItem from './src/ContributionItem/index'
import PageHeader from '../../../../components/Atoms/Headers/PageHeader/index'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'

const ContributionStartPage: React.FC = () => {
  return (
    <FullPage d="flex" flexDir="column">
      <Row px={4}>
        <PageHeader
          title="Start your contribuitions 🚀"
          description="Made by users for users"
        />
      </Row>
      <Col flex={1} alignItems="center" justifyContent="center">
        <SimpleGrid columns={3} w={600} maxW="100%" mx="auto" gap={4}>
          <ContributionItem
            to="/artist/new"
            icon={<MicrophoneIcon size={60} />}
            title="Create an Artist"
          />
          <ContributionItem
            to="/album/new"
            icon={<AlbumIcon size={60} />}
            title="Create an Album"
            description="Artist must exist on platform"
          />
          <ContributionItem
            to="/track/new"
            icon={<SongIcon size={60} />}
            title="Upload a Track"
            description="Artist and Album must exist on platform"
          />
        </SimpleGrid>
      </Col>
    </FullPage>
  )
}

export default ContributionStartPage
