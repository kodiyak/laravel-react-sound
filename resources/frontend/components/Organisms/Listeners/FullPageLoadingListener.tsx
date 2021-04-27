import React, { useState } from 'react'
import { useDisclosure } from '../../../hooks/useDisclosure'

import ContainerScreen from '../../Utils/ContainerScreen'
import RippleSpinner from '../../Utils/Spinners/RippleSpinner'

const FullPageLoadingListener: React.FC = ({ children }) => {
  const { isOpen } = useDisclosure('Loading.Full')
  if (!isOpen) return <>{children}</>

  return (
    <ContainerScreen d="flex" alignItems="center" justifyContent="center">
      <RippleSpinner size={20} />
    </ContainerScreen>
  )
}

export default FullPageLoadingListener
