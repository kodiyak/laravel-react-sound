import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

const BoxContainer: React.FC<BoxProps> = (props) => {
  return <Box d="flex" w={1200} mx="auto" maxW="100%" flexDir="column" {...props} />
}

export default BoxContainer
