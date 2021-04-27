import React, { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'
import DisclosureContainer from './Disclosure/DisclosureContainer'
import ThemeContainer from './ThemeContainer'
import AuthContainer from './AuthContainer'
import FullPageLoadingListener from '../components/Organisms/Listeners/FullPageLoadingListener'

const InitializeContainer: React.FC = ({ children }) => {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    if (setColorMode) {
      setColorMode('dark')
    }
  }, [setColorMode])

  return (
    <>
      <ThemeContainer>
        <AuthContainer>
          <FullPageLoadingListener>
            <DisclosureContainer />
            {children}
          </FullPageLoadingListener>
        </AuthContainer>
      </ThemeContainer>
    </>
  )
}

export default InitializeContainer
