import React from 'react'
import { Box } from '@chakra-ui/react'
import Col from '../../Utils/Col'

const ScrollPage: React.FC = ({ children }) => {
  return (
    <Col w="100%" h="100%" pos="absolute" left={0} top={0}>
      <Box pos="relative" w="100%" h="100%" overflowY="scroll" pt={16}>
        {children}
      </Box>
    </Col>
  )
}

export default ScrollPage
