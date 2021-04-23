import React from 'react'
import Row from '../../../../Utils/Row'
import { Square, Skeleton, BoxProps } from '@chakra-ui/react'
import Col from '../../../../Utils/Col'

const MenuButtonSkeleton: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Row alignItems="center" px={4} {...rest}>
      <Skeleton startColor="gray.500" endColor="gray.500">
        <Square size={6} />
      </Skeleton>
      <Col pl={4} flex={1}>
        <Skeleton startColor="gray.500" endColor="gray.500" h={4} w="100%" />
      </Col>
    </Row>
  )
}

export default MenuButtonSkeleton
