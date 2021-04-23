import React from 'react'
import Col from '../../../../components/Utils/Col'
import Row from '../../../../components/Utils/Row'
import TitlePage from '../../../../components/Ux/Page/TitlePage'
import { FormProvider } from '../../../../contexts/FormProvider'
import AlbumForm from '../../../../components/Organisms/Forms/AlbumForm/index'
import { Button } from '@chakra-ui/react'
import RowImage from '../../../../components/Atoms/RowImage'

const NewAlbumPage: React.FC = () => {
  return (
    <Col px={4}>
      <Row>
        <TitlePage>Create an Album</TitlePage>
      </Row>
      <FormProvider
        onSubmit={(data) => {
          console.log('submit', data)
        }}
      >
        <Row maxW={600}>
          <RowImage title="Artist Name" mb={4} />
        </Row>
        <AlbumForm />
        <Row maxW={600}>
          <Button
            ml="auto"
            rounded="2xl"
            bg="primary.500"
            color="white"
            colorScheme="primary"
            shadow="lg"
            type="submit"
          >
            Create Album
          </Button>
        </Row>
      </FormProvider>
    </Col>
  )
}

export default NewAlbumPage
