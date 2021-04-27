import React, { useState } from 'react'
import ContainerScreen from '../../components/Utils/ContainerScreen'
import Col from '../../components/Utils/Col'
import BoxOverlay from '../../components/Utils/BoxOverlay'
import LoginForm from './src/LoginForm'
import SignUpForm from './src/SignUpForm'
import Row from '../../components/Utils/Row'
import LogoHorizontal from '../../components/Ux/Icons/LogoHorizontal'
import { Badge } from '@chakra-ui/react'
import { useAuth } from '../../containers/AuthContainer'

const LoginPage: React.FC = () => {
  const [isLoginForm, setLoginForm] = useState(true)
  const { auth } = useAuth()

  return (
    <ContainerScreen d="flex" alignItems="center" justifyContent="center">
      <BoxOverlay zIndex={5}>
        <video
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
            zIndex: 5,
          }}
          autoPlay
          loop
          muted
          src={'/videos/guitar-bg.mp4'}
        ></video>
        <BoxOverlay bg="rgba(0,0,0,.4)" zIndex={10} />
      </BoxOverlay>
      <Col w={380} maxW="100%" p={4} pos="relative" zIndex={10}>
        <Row p={4} pos="relative">
          <LogoHorizontal />
          <Badge
            pos="absolute"
            right={4}
            bottom={4}
            transition="all .2s ease-in-out"
            opacity={isLoginForm ? 0 : 1}
            transform={isLoginForm ? 'translateY(10px)' : 'translateY(0)'}
          >
            Sign Up
          </Badge>
        </Row>
        {isLoginForm && <LoginForm onSignUp={() => setLoginForm(false)} />}
        {!isLoginForm && <SignUpForm onLogin={() => setLoginForm(true)} />}
      </Col>
    </ContainerScreen>
  )
}

export default LoginPage
