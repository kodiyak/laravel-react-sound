import { SimpleGrid } from '@chakra-ui/react'
import React, { useState, useMemo, useEffect, memo } from 'react'

import { CheckboxProps } from '..'
import CheckOptionsField from '../../../../Form/CheckOptionsField'

const CheckboxRender: React.FC<CheckboxProps> = (props) => {
  const options = useMemo(() => props.options, [props.options])

  const [value, setValue] = useState()

  useEffect(() => {
    props.onChange?.(value)
  }, [value])

  return (
    <SimpleGrid {...props.container}>
      <CheckOptionsField
        name={props.name}
        index="value"
        label="label"
        options={options}
        defaultValue={props.defaultValue}
        onChange={setValue}
        onInit={setValue}
        {...props.props}
      />
    </SimpleGrid>
  )
}

export default memo(CheckboxRender)
