import { useState, useEffect } from 'react'
import { useField } from '@unform/core'

export interface SelectOptionProps {
  options: any[]
  index: string
  label: string
  name: string
  defaultValue?: any
  onChange?: (value: any) => void
  isMultiple?: boolean
  isToggle?: boolean
}

export function useSelectOption({
  index,
  label,
  name,
  options,
  defaultValue,
  onChange,
  isMultiple = false,
  isToggle = false,
}: SelectOptionProps) {
  const [item, setItem] = useState<any>()
  const [isInit, setInit] = useState(false)
  const field = useField(name)

  const getOptionByIndex = (indexValue: string) => {
    return options.find((option) => option[index] === indexValue)
  }

  const isItemSelected = (option: any) => {
    if (isMultiple) {
      return (
        item && item?.find((itemValue: any) => itemValue[index] === option[index])
      )
    } else {
      return item && item?.[index] === option[index]
    }
  }

  const getLabel = (option: any) => option[label]

  const getIndex = (option: any) => option[index]

  const toggleItem = (option: any) => {
    if (isMultiple) {
      if (isItemSelected(option)) {
        setItem((oldItems: any) =>
          oldItems.filter((oldItem: any) => oldItem[index] !== option[index])
        )
      } else {
        setItem((oldItems: any) => [...oldItems, option])
      }
    } else {
      if (isToggle && isItemSelected(option)) {
        setItem(undefined)
      } else {
        setItem(() => option)
      }
    }
  }

  const fetchDefaultValue = (_defaultValue: any) => {
    if (isMultiple) {
      setItem(() => _defaultValue?.map((value: any) => getOptionByIndex(value)))
    } else {
      setItem(() => getOptionByIndex(_defaultValue))
    }
  }

  useEffect(() => {
    if (defaultValue) {
      fetchDefaultValue(defaultValue)
    } else {
      if (isMultiple) {
        setItem(() => [])
      }
    }
    setInit(true)
  }, [])

  useEffect(() => {
    if (item === undefined && isMultiple) {
      setItem(() => [])
    }
  }, [item])

  useEffect(() => {
    if (isInit) {
      onChange?.(item)
    }
  }, [item])

  useEffect(() => {
    field.registerField({
      name: field.fieldName,
      ref: undefined,
      getValue: () => {
        if (item) {
          if (isMultiple) {
            return item.map((itemValue: any) => itemValue?.[index])
          } else {
            return item[index]
          }
        }
      },
      setValue: (_, value) => {
        fetchDefaultValue(value)
        setInit(true)
      },
    })
  }, [field.registerField, item, field.fieldName])

  return {
    isItemSelected,
    toggleItem,
    options,
    getLabel,
    getIndex,
    items: item,
    field,
  }
}
