import { SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import InputField from '../../../../components/Form/InputField'
import Row from '../../../../components/Utils/Row'
import { FormProvider } from '../../../../contexts/FormProvider'

interface LoginFormProps {
  onSignUp?: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSignUp }) => {
  return (
    <FormProvider>
      <SimpleGrid gap={4}>
        <InputField
          name="username"
          rounded="sm"
          bg="rgba(0,0,0,.4)"
          label="E-mail"
          value="admin@lrmusic.com"
        />
        <InputField
          rounded="sm"
          name="password"
          bg="rgba(0,0,0,.4)"
          type="password"
          label="Password"
          value="s.o536123"
        />
      </SimpleGrid>
      <Row mt={4}>
        <Button
          ml="auto"
          rounded="sm"
          shadow="lg"
          colorScheme="green"
          bg="green.500"
          color="white"
          textTransform="uppercase"
          onClick={onSignUp}
        >
          Sign Up
        </Button>
        <Button
          ml={4}
          rounded="sm"
          shadow="lg"
          colorScheme="primary"
          bg="primary.500"
          color="white"
          textTransform="uppercase"
          type="submit"
        >
          Login
        </Button>
      </Row>
    </FormProvider>
  )
}

export default LoginForm