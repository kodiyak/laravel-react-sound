import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Col from '../../Utils/Col'

const FullPage: React.FC<BoxProps> = ({ ...rest }) => {
  return (
    <Col w="100%" h="100%" pos="absolute" left={0} top={0}>
      <Box pos="relative" w="100%" h="100%" pt={16} {...rest} />
    </Col>
  )
}

export default FullPage
