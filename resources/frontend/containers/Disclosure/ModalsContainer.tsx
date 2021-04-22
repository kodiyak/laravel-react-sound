import React from 'react'
import Modal from '../../components/Ux/Modal'
import ModalPlaylist from '../../components/Modals/ModalPlaylist/index'

const ModalsContainer: React.FC = () => {
  const modals = [ModalPlaylist]
  return (
    <>
      {modals.map((ModalComponent, keyModal) => (
        <ModalComponent key={`modal${keyModal}`} />
      ))}
    </>
  )
}

export default ModalsContainer
