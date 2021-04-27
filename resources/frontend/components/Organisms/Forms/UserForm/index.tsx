import { SimpleGrid, InputProps } from '@chakra-ui/react'
import React from 'react'
import InputField from '../../../Form/InputField'

interface UserFormProps {
  _input?: InputProps
}

const UserForm: React.FC<UserFormProps> = ({ _input }) => {
  return (
    <SimpleGrid gap={4}>
      <SimpleGrid columns={2} gap={2}>
        <InputField name="first_name" label="First Name" {..._input} />
        <InputField name="last_name" label="Last Name" {..._input} />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <InputField name="username" label="Username" {..._input} />
        <InputField name="email" label="E-mail" {..._input} />
      </SimpleGrid>
    </SimpleGrid>
  )
}

export default UserForm
