import React from 'react'
import ScrollPage from '../../../../components/Atoms/ScrollPage/index'
import Row from '../../../../components/Utils/Row'
import PageHeader from '../../../../components/Atoms/Headers/PageHeader/index'
import Col from '../../../../components/Utils/Col'
import ProfileForm from '../../../../components/Organisms/Forms/ProfileForm/index'
import { FormProvider } from '../../../../contexts/FormProvider'
import { SimpleGrid, Heading, Button } from '@chakra-ui/react'
import InputField from '../../../../components/Form/InputField'
import TextMini from '../../../../components/Utils/TextMini'
import { Text } from '@chakra-ui/layout'
import { useAuth } from '../../../../containers/AuthContainer'
import App from '../../../../../app/App'

const SettingsProfilePage: React.FC = () => {
  const { auth } = useAuth()
  return (
    <ScrollPage>
      <Row px={4}>
        <PageHeader title="Profile" />
      </Row>
      <Col px={4} w={600}>
        <FormProvider
          onStart={() => {
            return auth
          }}
          onSubmit={(data) => {
            return App.Api.UserApi.update(auth, data).then((user) => {
              App.Resources.AuthResource.setProfile(user)
            })
          }}
        >
          <ProfileForm />
          <Row mt={2}>
            <Button
              ml="auto"
              rounded="lg"
              shadow="lg"
              colorScheme="primary"
              bg="primary.400"
              color="white"
              type="submit"
            >
              Save Changes
            </Button>
          </Row>
        </FormProvider>
        <FormProvider>
          <SimpleGrid mt={8} gap={2}>
            <Heading size="lg" fontWeight="bold" color="gray.400">
              Change password
            </Heading>
            <InputField name="password" label="Your Password" />
            <Row h={'1px'} bg="gray.700" my={4} />
            <InputField name="password_confirm" label="New Password" />
            <InputField name="password_confirm" label="Confirm password" />
            <Row>
              <Button
                ml="auto"
                rounded="lg"
                shadow="lg"
                colorScheme="primary"
                bg="primary.400"
                color="white"
                isDisabled
              >
                Change Password
              </Button>
            </Row>
          </SimpleGrid>
        </FormProvider>
      </Col>
    </ScrollPage>
  )
}

export default SettingsProfilePage
