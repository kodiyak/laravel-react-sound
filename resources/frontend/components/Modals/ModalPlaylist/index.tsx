import React from 'react'
import Modal from '../../Ux/Modal'
import PlaylistForm from '../../Organisms/Forms/PlaylistForm/index'
import { FormProvider } from '../../../contexts/FormProvider'
import Row from '../../Utils/Row'
import { Button } from '@chakra-ui/react'

const ModalPlaylist: React.FC = () => {
  return (
    <Modal
      name="Modal.Playlist"
      title="Create a Playlist"
      _modal={{ isCentered: true, size: 'xl' }}
      _content={{ rounded: 'xl' }}
    >
      <FormProvider
        onSubmit={(data) => {
          console.log('eaeee', data)
        }}
      >
        <PlaylistForm />
        <Row mt={4}>
          <Button
            ml="auto"
            rounded="2xl"
            bg="primary.500"
            color="white"
            colorScheme="primary"
            shadow="lg"
            type="submit"
          >
            Create Playlist
          </Button>
        </Row>
      </FormProvider>
    </Modal>
  )
}

export default ModalPlaylist
