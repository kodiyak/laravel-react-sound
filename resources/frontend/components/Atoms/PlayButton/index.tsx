import React from 'react'
import { Circle, SquareProps } from '@chakra-ui/react'
import { PlayIcon } from '../../Ux/Icons'
import { IconType } from 'react-icons/lib'

interface PlayButtonProps {
  size?: number
  iconSize?: number
  _circle?: SquareProps
  _icon?: IconType
}

const PlayButton: React.FC<PlayButtonProps> = ({
  size = 16,
  iconSize = 30,
  _circle,
  _icon,
}) => {
  return (
    <Circle
      size={size}
      border="2px solid transparent"
      borderColor="white"
      _hover={{ transform: 'scale(1.1)', bg: 'rgba(0,0,0,.5)' }}
      _active={{ transform: 'scale(0.9)' }}
      transition="transform .2s ease-in-out"
      {..._circle}
    >
      <PlayIcon {..._icon} size={iconSize} />
    </Circle>
  )
}

export default PlayButton
