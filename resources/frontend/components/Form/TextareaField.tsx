import React from 'react'
import Row from '../Utils/Row'
import { TextareaProps, BoxProps, FormLabel, Textarea } from '@chakra-ui/react'
import ErrorCollapse from './src/ErrorCollapse'
import Col from '../Utils/Col'
import { useFieldState } from '../../hooks/helpers/useFieldState'
import { Text } from '@chakra-ui/layout'
import TextMini from '../Utils/TextMini'

interface TextareaFieldProps extends TextareaProps {
  name: string
  label?: string
  description?: string
  _container?: BoxProps
}

const TextareaField: React.FC<TextareaFieldProps> = ({
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
        <Textarea
          focusBorderColor="primary.400"
          rounded="sm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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

export default TextareaField
