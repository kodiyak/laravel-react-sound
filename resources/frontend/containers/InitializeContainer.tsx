import React, { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'
import DisclosureContainer from './Disclosure/DisclosureContainer'

const InitializeContainer: React.FC = ({ children }) => {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    if (setColorMode) {
      setColorMode('dark')
    }
  }, [setColorMode])

  return (
    <>
      <DisclosureContainer />
      {children}
    </>
  )
}

export default InitializeContainer
