import React, { forwardRef } from 'react'
import { ChakraProps, chakra, ComponentWithAs } from '@chakra-ui/react'
import { MotionProps, motion } from 'framer-motion'

export type BoxMotionProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType
  }

export const BoxMotion = motion(
  forwardRef<ChakraProps, 'div'>((props, ref) => {
    return <chakra.div ref={ref as any} {...props} />
  })
) as ComponentWithAs<'div', BoxMotionProps>
