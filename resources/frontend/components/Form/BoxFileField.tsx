import React from 'react'
import { useFieldState } from '../../hooks/helpers/useFieldState'
import BoxFile from '../Utils/BoxFile'
import { BoxProps } from '@chakra-ui/layout'

export type BoxFileFieldProps = {
  name: string
  isMultiple?: boolean
  onChange?: (files: FileList) => void
} & BoxProps

const BoxFileField: React.FC<BoxFileFieldProps> = ({
  name,
  isMultiple,
  onChange,
  ...rest
}) => {
  const [value, setValue, field] = useFieldState(name)

  return (
    <BoxFile
      input={{
        multiple: isMultiple || false,
        onChange: (e) => {
          if (!e.target.files) return

          onChange?.(e.target.files)

          if (isMultiple) {
            setValue(() => e.target.files)
          } else {
            setValue(() => e.target.files.item(0))
          }
        },
      }}
      {...rest}
    />
  )
}

export default BoxFileField
