import React, { useState, useEffect } from 'react'
import { BoxProps } from '@chakra-ui/layout'
import { Box, SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import { CheckOptionsFieldProps } from '../../../Form/CheckOptionsField'
import { DropdownOptionsInputProps } from '../../../Form/DropdownOptionsField'
import Col from '../../../Utils/Col'
import InputRender from './InputRender'
import CheckboxRender from './CheckboxRender'
import { FormProvider } from '../../../../contexts/FormProvider'
import DropdownRender from './DropdownRender/index'
import useDebounce from '../../../../hooks/useHooks/useDebounce'

type OptionsProps = Array<{
  label: React.ReactNode
  value: any
}>

export interface CheckboxProps {
  type: 'checkbox'
  onChange?: (value: any) => void
  name: string
  options: OptionsProps
  props?: Partial<CheckOptionsFieldProps>
  container?: SimpleGridProps
  defaultValue?: any[] | any
}

export interface DropdownProps {
  type: 'dropdown'
  onChange?: (value: any) => void
  name: string
  container?: BoxProps
  options: OptionsProps
  placeholder?: string
  props?: Partial<DropdownOptionsInputProps>
  defaultValue?: any[] | any
}

export interface InputProps {
  type: 'text'
  onChange?: (value: any) => void
  name: string
  container?: BoxProps
  placeholder?: string
  defaultValue?: string
}

export type FilterItemProps = CheckboxProps | DropdownProps | InputProps

export interface FilterFormProps {
  rows?: Array<{
    props: SimpleGridProps
    filters: FilterItemProps[]
  }>
  delay?: number
  onChangeStart?: (value: any) => void
  onChangeEnd?: (value: any) => void
}

const FilterForm: React.FC<FilterFormProps> = ({
  rows,
  delay = 200,
  onChangeEnd,
  onChangeStart,
}) => {
  const [filterValue, setValue] = useState<any>({})
  const debouncedFilterValue = useDebounce(filterValue, delay)

  const Item = (props: FilterItemProps) => {
    const onChange = (value: any) => {
      if (!value) return
      setValue((oldValue) => ({
        ...oldValue,
        [props.name]: value,
      }))
    }

    props.onChange = (value: any) => {
      onChange(value)
    }

    if (props.type === 'text') return <InputRender {...props} />
    if (props.type === 'checkbox') return <CheckboxRender {...props} />
    if (props.type === 'dropdown') return <DropdownRender {...props} />
  }

  useEffect(() => {
    onChangeStart?.(filterValue)
  }, [filterValue])

  useEffect(() => {
    onChangeEnd?.(debouncedFilterValue)
  }, [debouncedFilterValue])

  return (
    <FormProvider>
      <Col>
        {rows.map((row, keyRow) => (
          <SimpleGrid key={`rowFilter${keyRow}`} {...row.props}>
            {row.filters.map((filter, keyFilter) => (
              <Box key={`keyFilter${keyRow}${keyFilter}`} w="100%">
                {Item(filter)}
              </Box>
            ))}
          </SimpleGrid>
        ))}
      </Col>
    </FormProvider>
  )
}

export default FilterForm
