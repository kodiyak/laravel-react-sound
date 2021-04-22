import React from 'react'
import Col from '../../../../Utils/Col'

// import { Container } from './styles';
import { Image, ImageProps, BoxProps } from '@chakra-ui/react'
import BoxOverlay from '../../../../Utils/BoxOverlay'

interface CoverItemProps extends BoxProps {
  src: string
  _image?: ImageProps
  _overlay?: BoxProps
}

const CoverItem: React.FC<CoverItemProps> = ({
  src,
  _image,
  _overlay,
  children,
  ...rest
}) => {
  return (
    <Col
      w="90%"
      h="90%"
      rounded="3xl"
      pos="absolute"
      bg="gray.900"
      transition="all .2s ease-in-out"
      overflow="hidden"
      _groupHover={{ left: '5%', top: '5%' }}
      {...rest}
    >
      <Image
        src={src}
        w="100%"
        h="100%"
        rounded="3xl"
        objectFit="cover"
        pos="relative"
        zIndex={1}
        userSelect="none"
        {..._image}
      />
      {children && (
        <BoxOverlay
          userSelect="none"
          zIndex={2}
          rounded={rest.rounded || '3xl'}
          {..._overlay}
        >
          {children}
        </BoxOverlay>
      )}
    </Col>
  )
}

export default CoverItem
