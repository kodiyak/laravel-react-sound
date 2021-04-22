import { Box, SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import BoxFileField from '../../../Form/BoxFileField'
import InputField from '../../../Form/InputField'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import TextMini from '../../../Utils/TextMini'
import TextareaField from '../../../Form/TextareaField'

const ArtistForm: React.FC = () => {
  return (
    <Col>
      <Row>
        <BoxFileField
          name="image"
          w={250}
          h={250}
          mr={4}
          bg="gray.700"
          rounded="2xl"
          d="flex"
          alignItems="center"
          justifyContent="center"
          userSelect="none"
          cursor="pointer"
        >
          <TextMini>Pick a Picture</TextMini>
        </BoxFileField>
        <BoxFileField
          name="cover"
          flex={1}
          h={250}
          bg="gray.700"
          rounded="2xl"
          d="flex"
          alignItems="center"
          justifyContent="center"
          userSelect="none"
          cursor="pointer"
        >
          <TextMini>Pick a Cover</TextMini>
        </BoxFileField>
      </Row>
      <Box maxW={600} mt={4}>
        <SimpleGrid gap={2}>
          <InputField name="real_name" label="Real Name" />
          <InputField name="artistic_name" label="Artistic Name" />
          <TextareaField name="short_description" label="Short Description" />
          <Row>
            <Button
              ml="auto"
              rounded="2xl"
              bg="primary.500"
              color="white"
              colorScheme="primary"
              shadow="lg"
              type="submit"
            >
              Create Artist
            </Button>
          </Row>
        </SimpleGrid>
      </Box>
    </Col>
  )
}

export default ArtistForm
