import { SimpleGridProps, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const PlaylistGrid: React.FC<SimpleGridProps> = ({ ...rest }) => {
  return <SimpleGrid columns={[1, 2, 2, 3, 4, 5]} gap={4} {...rest} />
}

export default PlaylistGrid
