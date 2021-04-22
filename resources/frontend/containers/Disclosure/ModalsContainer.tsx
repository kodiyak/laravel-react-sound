import React from 'react'
import Modal from '../../components/Ux/Modal'

const ModalsContainer: React.FC = () => {
  return (
    <>
      <Modal
        name="Modal.Test"
        title="Modal de teste"
        _modal={{ size: 'full' }}
        _content={{ m: 0, shadow: 'none' }}
      >
        Oba
      </Modal>
    </>
  )
}

export default ModalsContainer
