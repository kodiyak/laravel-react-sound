import { Button } from '@chakra-ui/react'
import React from 'react'
import UserForm from '../../../../components/Organisms/Forms/UserForm'
import Row from '../../../../components/Utils/Row'
import { FormProvider } from '../../../../contexts/FormProvider'

interface SignUpFormProps {
  onLogin?: () => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onLogin }) => {
  return (
    <FormProvider>
      <UserForm
        _input={{
          rounded: 'sm',
          bg: 'rgba(0,0,0,.4)',
        }}
      />
      <Row mt={4}>
        <Button
          ml="auto"
          rounded="sm"
          shadow="lg"
          colorScheme="green"
          bg="green.500"
          color="white"
          textTransform="uppercase"
          onClick={onLogin}
        >
          Login
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
          Sign Up
        </Button>
      </Row>
    </FormProvider>
  )
}

export default SignUpForm
