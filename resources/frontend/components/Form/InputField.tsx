import React from 'react'
import Row from '../Utils/Row'
import { Input, InputProps, BoxProps, FormLabel } from '@chakra-ui/react'
import ErrorCollapse from './src/ErrorCollapse'
import Col from '../Utils/Col'
import { useFieldState } from '../../hooks/helpers/useFieldState'
import { Text } from '@chakra-ui/layout'
import TextMini from '../Utils/TextMini'

interface InputFieldProps extends InputProps {
  name: string
  label?: string
  description?: string
  _container?: BoxProps
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  description,
  _container,
  ...rest
}) => {
  const [value, setValue, field] = useFieldState(name, '')

  return (
    <Col {..._container}>
      {label && (
        <Text fontSize="sm" userSelect="none" fontWeight="bold" mb={1}>
          {label}
        </Text>
      )}
      <Row>
        <Input
          focusBorderColor="primary.400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          bg="gray.600"
          _focus={{ bg: 'white', color: 'gray.800' }}
          rounded="xl"
          {...rest}
        />
        <ErrorCollapse {...field} />
      </Row>
      {description && (
        <TextMini userSelect="none" color="GrayText">
          {description}
        </TextMini>
      )}
    </Col>
  )
}

export default InputField
