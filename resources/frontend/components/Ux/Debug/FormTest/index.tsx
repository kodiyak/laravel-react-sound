import { SimpleGrid, Checkbox, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import BoxFileField from '../../../Form/BoxFileField'
import CheckOptionsField from '../../../Form/CheckOptionsField'
import DropdownOptionsField from '../../../Form/DropdownOptionsField'
import InputField from '../../../Form/InputField'
import TextareaField from '../../../Form/TextareaField'
import BoxContainer from '../../../Utils/BoxContainer'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import { DownIcon } from '../../Icons'
import { FormProvider } from '../../../../contexts/FormProvider'
import { Text } from '@chakra-ui/layout'

const FormTest: React.FC = () => {
  return (
    <Col>
      <BoxContainer>
        <Row my={2}>
          <Heading>Form Test - With Unform</Heading>
        </Row>
        <FormProvider
          onSubmit={(data) => {
            console.log('data', data)
          }}
        >
          <InputField
            name="title"
            label="Title"
            description="Max. 100 characters"
            placeholder="Input Placeholder"
          />
          <InputField name="description" label="Description" />
          <TextareaField
            name="long_description"
            label="Long Description"
            description="Max. 200 characters"
          />
          <SimpleGrid columns={4} gap={4}>
            <CheckOptionsField
              CheckComponent={Checkbox}
              isMultiple
              name="checkbox"
              index="id"
              label="label"
              options={[
                {
                  label: 'First Option',
                  id: 1,
                },
                {
                  label: 'Second Option',
                  id: 2,
                },
              ]}
            >
              <Row p={4}>
                <Text mr="auto">Select...</Text>
                <DownIcon />
              </Row>
            </CheckOptionsField>
          </SimpleGrid>
          <SimpleGrid columns={4} gap={4}>
            <DropdownOptionsField
              isMultiple
              name="dropdown"
              index="id"
              label="label"
              options={[
                {
                  label: 'First Option',
                  id: 1,
                },
                {
                  label: 'Second Option',
                  id: 2,
                },
              ]}
            >
              <Row p={4}>
                <Text mr="auto">Select...</Text>
                <DownIcon />
              </Row>
            </DropdownOptionsField>
          </SimpleGrid>
          <SimpleGrid columns={4} gap={4}>
            <BoxFileField
              name="file"
              w={100}
              h={100}
              rounded="lg"
              bg="gray.700"
              color="white"
              d="flex"
              alignItems="center"
              justifyContent="center"
            >
              Pick a file
            </BoxFileField>
          </SimpleGrid>
          <Button mt={4} type="submit">
            Enviar
          </Button>
        </FormProvider>
      </BoxContainer>
    </Col>
  )
}

export default FormTest
