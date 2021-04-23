import React from 'react'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import BoxFileField from '../../../Form/BoxFileField'
import TextMini from '../../../Utils/TextMini'
import { Text } from '@chakra-ui/layout'
import InputField from '../../../Form/InputField'
import { SimpleGrid } from '@chakra-ui/react'

const AlbumForm: React.FC = () => {
  return (
    <Col maxW={600}>
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
            <Text>Pick a Album Cover</Text>
          </BoxFileField>
          <TextMini color="gray.400" userSelect="none" mt={2}>
            Max. File size 1MB
          </TextMini>
          <TextMini color="gray.400" userSelect="none">
            Formats: Jpg, png, gif
          </TextMini>
        </Col>
        <Col flex={1} pl={4}>
          <SimpleGrid gap={2}>
            <InputField name="title" label="Title" />
            <InputField name="year_release" label="Release Year" />
          </SimpleGrid>
        </Col>
      </Row>
    </Col>
  )
}

export default AlbumForm
