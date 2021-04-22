import { Heading, SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'
import BoxContainer from '../../../../components/Utils/BoxContainer'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'
import TitlePage from '../../../../components/Ux/Page/TitlePage'
import { FormProvider } from '../../../../contexts/FormProvider'
import ArtistForm from '../../../../components/Organisms/Forms/ArtistForm/index'

const NewArtistPage: React.FC = () => {
  return (
    <Col px={4}>
      <Row>
        <TitlePage>Create an Artist</TitlePage>
      </Row>
      <FormProvider>
        <ArtistForm />
      </FormProvider>
    </Col>
  )
}

export default NewArtistPage
