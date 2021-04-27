import { Box, BoxProps, useToken } from '@chakra-ui/react'
import React from 'react'

interface RippleSpinnerProps extends BoxProps {
  size?: number
}

const RippleSpinner: React.FC<RippleSpinnerProps> = ({ size = 10, ...rest }) => {
  const borderColor = useToken('colors', [
    (rest.borderColor || 'primary.500') as any,
  ])
  return (
    <Box w={size} h={size} {...rest}>
      <div className="lds-ripple">
        <div style={{ borderColor }}></div>
        <div style={{ borderColor }}></div>
      </div>
    </Box>
  )
}

export default RippleSpinner
