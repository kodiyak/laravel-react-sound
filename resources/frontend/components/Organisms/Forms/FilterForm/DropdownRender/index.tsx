import { Box } from '@chakra-ui/react'
import React, { useState, useMemo, useEffect, memo } from 'react'

import { DropdownProps } from '..'
import DropdownOptionsInput from '../../../../Form/DropdownOptionsField'
import Row from '../../../../Utils/Row'
import TextMini from '../../../../Utils/TextMini'
import { DownIcon } from '../../../../Ux/Icons'

const DropdownRender: React.FC<DropdownProps> = (props) => {
  const options = useMemo(() => props.options, [props.options])
  const [value, setValue] = useState()

  useEffect(() => {
    props.onChange?.(value)
  }, [value])

  return (
    <Row>
      <Box {...props.container}>
        <DropdownOptionsInput
          name="sort"
          label="label"
          index="value"
          _container={{ h: '100%', w: '100%' }}
          _menu={{ placement: 'bottom-end' }}
          options={options}
          onChange={setValue}
          onInit={setValue}
          defaultValue={props.defaultValue}
          {...props.props}
        >
          <Row alignItems="center" h="100%" w="100%">
            <TextMini mr={'auto'}>
              {value?.label || props.placeholder || 'Select...'}
            </TextMini>
            <DownIcon />
          </Row>
        </DropdownOptionsInput>
      </Box>
    </Row>
  )
}

export default memo(DropdownRender)
