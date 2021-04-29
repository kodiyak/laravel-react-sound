import { useToken } from '@chakra-ui/react'
import { rgba } from 'polished'
import { useMemo } from 'react'

export function useColorRgba(color: string, scale: number = 1) {
  const [tokenColor] = useToken('colors', [color])

  const rgbaColor = useMemo(() => {
    return rgba(tokenColor, scale)
  }, [color, scale])

  return rgbaColor
}
