import { Square, Input } from '@chakra-ui/react'
import React from 'react'
import Row from '../../../Utils/Row'
import { SearchIcon } from '../../../Ux/Icons'

const SearchHeader: React.FC = () => {
  return (
    <Row rounded="xl" _focusWithin={{ bg: 'gray.700' }}>
      <Square size={10}>
        <SearchIcon />
      </Square>
      <Input
        border={0}
        bg="transparent"
        _focus={{}}
        _hover={{}}
        _active={{}}
        h={10}
        w={300}
        placeholder="Search in playlist..."
        _placeholder={{ color: 'gray.200' }}
      />
    </Row>
  )
}

export default SearchHeader
