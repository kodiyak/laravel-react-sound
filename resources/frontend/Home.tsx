import { Box, Button, Checkbox, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import App from '../app/App'
import Modal from './components/Ux/Modal/index'
import { useDisclosure } from './hooks/useDisclosure'
import ContainerScreen from './components/Utils/ContainerScreen'
import Col from './components/Utils/Col'
import Title from './components/Ux/Page/Title'
import AppResume from './components/Ux/Debug/AppResume'
import { FormProvider } from './contexts/FormProvider'
import InputField from './components/Form/InputField'
import CheckOptionsField from './components/Form/CheckOptionsField'
import DropdownOptionsField from './components/Form/DropdownOptionsField'
import Row from './components/Utils/Row'
import { Text } from '@chakra-ui/layout'
import { DownIcon } from './components/Ux/Icons'
import TextareaField from './components/Form/TextareaField'
import BoxFileField from './components/Form/BoxFileField'
import FormTest from './components/Ux/Debug/FormTest/index'

const Home: React.FC = () => {
  const { onOpen } = useDisclosure('Modal.Test')

  return (
    <ContainerScreen overflowY="auto">
      <Title value="Home Page" />
      {/* <Col h={250} bg="gray.700"></Col> */}
      <AppResume />
      <FormTest />
    </ContainerScreen>
  )
}

export default Home
