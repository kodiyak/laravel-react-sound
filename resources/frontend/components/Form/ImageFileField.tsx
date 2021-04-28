import React, { useState } from 'react'
import BoxFileField, { BoxFileFieldProps } from './BoxFileField'
import { Image, ImageProps } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'
import { useFieldState } from '../../hooks/helpers/useFieldState'
import BoxFile from '../Utils/BoxFile'

// @ts-ignore
interface ImageFileFieldProps extends BoxFileFieldProps {
  name: string
  label?: string
  _image?: ImageProps
  isMultiple?: boolean
  onChange?: (files: File) => void
}

const ImageFileField: React.FC<ImageFileFieldProps> = ({
  name,
  label,
  _image,
  isMultiple,
  onChange,
  ...rest
}) => {
  const [source, setSource] = useState('')
  const [_, setValue] = useFieldState(name, undefined, {
    onSetValue: (v) => {
      setSource(v)
    },
  })

  const onChangeFile = (files: FileList) => {
    setSource(() => URL.createObjectURL(files.item(0)))
  }

  return (
    <BoxFile
      overflow="hidden"
      input={{
        multiple: isMultiple || false,
        onChange: (e) => {
          if (!e.target.files) return

          const file = e.target.files.item(0)

          onChange?.(file)
          onChangeFile(e.target.files)

          setValue(() => file)
        },
      }}
      {...rest}
    >
      {source ? (
        <Image w="100%" h="100%" objectFit="contain" {..._image} src={source} />
      ) : (
        <Text textAlign="center" fontWeight="bold" fontSize="sm">
          {label}
        </Text>
      )}
    </BoxFile>
  )
}

export default ImageFileField
