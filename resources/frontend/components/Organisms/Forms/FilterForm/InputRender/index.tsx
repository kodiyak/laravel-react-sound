import React, { useState, useEffect, memo } from 'react'
import { InputProps } from '..'
import { Box } from '@chakra-ui/react'
import SearchHeader from '../../../../Atoms/Headers/SearchHeader/index'

const InputRender: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    props.onChange?.(value)
  }, [value])

  return (
    <Box {...props.container}>
      <SearchHeader
        _input={{ onChange: (e) => setValue(e.target.value), value }}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
    </Box>
  )
}

export default memo(InputRender)
