import { Square, Input, InputProps, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Row from '../../../Utils/Row'
import { SearchIcon } from '../../../Ux/Icons'

interface SearchHeaderProps extends BoxProps {
  _input?: InputProps
  placeholder?: string
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  _input,
  placeholder = 'Search in playlist...',
  ...rest
}) => {
  return (
    <Row rounded="xl" _focusWithin={{ bg: 'gray.700' }} {...rest}>
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
        placeholder={placeholder}
        _placeholder={{ color: 'gray.200' }}
        flex={1}
        {..._input}
      />
    </Row>
  )
}

export default SearchHeader
