import React from 'react'
import Col from '../../../../Utils/Col'
import Row from '../../../../Utils/Row'
import TextMini from '../../../../Utils/TextMini'
import { Text } from '@chakra-ui/layout'
import { Image, Skeleton, Square } from '@chakra-ui/react'

interface ItemResumeProps {
  src?: string
  title: string
  description?: string
  isLoading?: boolean
}

const ItemResume: React.FC<ItemResumeProps> = ({
  src,
  title,
  description,
  isLoading,
}) => {
  return (
    <Row alignItems="center">
      <Col pr={4}>
        <Square size={10}>
          <Image
            src={src}
            as={isLoading ? Skeleton : undefined}
            rounded="lg"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Square>
      </Col>
      <Col flex={1}>
        <Text fontSize="sm" as={isLoading ? Skeleton : undefined}>
          {title}
        </Text>
        <TextMini>{description}</TextMini>
      </Col>
    </Row>
  )
}

export default ItemResume
