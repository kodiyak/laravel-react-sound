import React from 'react'
import BoxFileField from '../../../Form/BoxFileField'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import TextMini from '../../../Utils/TextMini'
import { Text } from '@chakra-ui/layout'
import { Box, SimpleGrid } from '@chakra-ui/react'
import InputField from '../../../Form/InputField'
import ImageFileField from '../../../Form/ImageFileField'

const ProfileForm: React.FC = () => {
  return (
    <Row>
      <Col w={200}>
        <ImageFileField
          name="avatar"
          label="Pick your avatar"
          w={100}
          h={100}
          cursor="pointer"
          d="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.500"
          _hover={{ bg: 'gray.600' }}
          rounded="50%"
          mx="auto"
        >
          <Text>Pick a Image</Text>
        </ImageFileField>
        <TextMini color="gray.400" userSelect="none" mt={2}>
          Max. File size 1MB
        </TextMini>
        <TextMini color="gray.400" userSelect="none">
          Formats: Jpg, png, gif
        </TextMini>
      </Col>
      <Box flex={1}>
        <SimpleGrid gap={2}>
          <SimpleGrid columns={2} gap={2}>
            <InputField name="first_name" label="First Name" />
            <InputField name="last_name" label="Last Name" />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={2}>
            <InputField name="username" label="Username" />
            <InputField name="email" label="E-mail" />
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </Row>
  )
}

export default ProfileForm
