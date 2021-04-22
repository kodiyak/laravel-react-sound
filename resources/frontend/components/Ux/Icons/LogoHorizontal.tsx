import React, { useMemo } from 'react'

import App from '../../../../app/App'
import { Image, ImageProps } from '@chakra-ui/react'

interface LogoHorizontalProps extends ImageProps {
  variant?: 'black' | 'white'
}

const LogoHorizontal: React.FC<LogoHorizontalProps> = ({
  variant = 'white',
  ...rest
}) => {
  const LogoSrc = useMemo(() => {
    return App.getConfig().LOGOS.horizontal[variant]
  }, [variant])

  return <Image src={LogoSrc} {...rest} />
}

export default LogoHorizontal
