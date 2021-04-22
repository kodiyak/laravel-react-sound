import React from 'react'
import BoxFileField from '../../../Form/BoxFileField'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import { Text } from '@chakra-ui/layout'
import TextMini from '../../../Utils/TextMini'
import { Box, SimpleGrid } from '@chakra-ui/react'
import InputField from '../../../Form/InputField'
import TextareaField from '../../../Form/TextareaField'

const PlaylistForm: React.FC = () => {
  return (
    <Row>
      <Col w={200}>
        <BoxFileField
          name="image"
          w={200}
          h={200}
          cursor="pointer"
          d="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.500"
          _hover={{ bg: 'gray.600' }}
          rounded="2xl"
        >
          <Text>Pick a Image</Text>
        </BoxFileField>
        <TextMini color="gray.400" userSelect="none" mt={2}>
          Max. File size 1MB
        </TextMini>
        <TextMini color="gray.400" userSelect="none">
          Formats: Jpg, png, gif
        </TextMini>
      </Col>
      <Col flex={1} pl={4}>
        <Box>
          <SimpleGrid flex={1} gap={2}>
            <InputField
              name="title"
              label="Title"
              rounded="xl"
              bg="gray.600"
              _focus={{ bg: 'white', color: 'gray.800' }}
            />
            <TextareaField
              name="description"
              label="Description"
              rounded="xl"
              bg="gray.600"
              _focus={{ bg: 'white', color: 'gray.800' }}
            />
          </SimpleGrid>
        </Box>
      </Col>
    </Row>
  )
}

export default PlaylistForm
