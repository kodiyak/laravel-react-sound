import React from 'react'
import Row from '../../Utils/Row'
import { Square, BoxProps, ImageProps, Heading } from '@chakra-ui/react'
import Col from '../../Utils/Col'
import { Text } from '@chakra-ui/layout'

interface RowImageProps extends BoxProps {
  title?: string
  description?: string
  imageSide?: 'left' | 'right'
  _image?: ImageProps
}

const RowImage: React.FC<RowImageProps> = ({
  _image,
  title,
  description,
  imageSide = 'left',
  ...rest
}) => {
  const SquareImage: React.FC = () => (
    <Square size={20} bg="black" rounded="2xl"></Square>
  )

  return (
    <Row
      p={2}
      w="100%"
      rounded="2xl"
      userSelect="none"
      alignItems="center"
      _hover={{ bg: 'gray.700' }}
      {...rest}
    >
      {imageSide === 'left' && <SquareImage />}
      <Col flex={1} px={4}>
        {title && <Heading size="md">{title}</Heading>}
        {description && (
          <Text fontSize="xs" mt={4} color="gray.400">
            {description}
          </Text>
        )}
      </Col>
      {imageSide === 'right' && <SquareImage />}
    </Row>
  )
}

export default RowImage
