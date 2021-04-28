import React, { useState } from 'react'
import BoxFileField, { BoxFileFieldProps } from './BoxFileField'
import { Image, ImageProps } from '@chakra-ui/react'
import { Text } from '@chakra-ui/layout'

interface ImageFileFieldProps extends BoxFileFieldProps {
  name: string
  label?: string
  _image?: ImageProps
}

const ImageFileField: React.FC<ImageFileFieldProps> = ({
  name,
  label,
  _image,
  ...rest
}) => {
  const [source, setSource] = useState('')

  const onChangeFile = (files: FileList) => {
    setSource(() => URL.createObjectURL(files.item(0)))
  }

  return (
    <BoxFileField
      name={name}
      onChange={(files) => {
        onChangeFile(files)
        rest.onChange?.(files)
      }}
      overflow="hidden"
      {...rest}
    >
      {source ? (
        <Image w="100%" h="100%" objectFit="contain" {..._image} src={source} />
      ) : (
        <Text textAlign="center" fontWeight="bold" fontSize="sm">
          {label}
        </Text>
      )}
    </BoxFileField>
  )
}

export default ImageFileField
