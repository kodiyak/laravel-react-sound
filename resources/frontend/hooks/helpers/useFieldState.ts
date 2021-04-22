import { useField } from '@unform/core'
import { useState, useEffect } from 'react'

export function useFieldState<T>(name: string, initialValue?: T) {
  const field = useField(name)
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    field.registerField({
      name: field.fieldName,
      getValue: () => value,
      setValue: (_, value) => setValue(value),
    })
  }, [field.registerField, field.fieldName, value])

  return [value, setValue, field] as [
    T,
    React.Dispatch<React.SetStateAction<T>>,
    ReturnType<typeof useField>
  ]
}
