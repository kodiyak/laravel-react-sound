import { SimpleGridProps, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const ArtistsGrid: React.FC<SimpleGridProps> = ({ ...rest }) => {
  return <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} gap={4} {...rest} />
}

export default ArtistsGrid
