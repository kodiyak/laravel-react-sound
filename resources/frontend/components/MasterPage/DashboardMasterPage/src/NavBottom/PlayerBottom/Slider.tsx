import React from 'react'
import {
  Slider as SliderChakra,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'

const Slider: React.FC = () => {
  return (
    <SliderChakra
      aria-label="slider-ex-1"
      colorScheme="gray"
      step={0.1}
      defaultValue={30}
    >
      <SliderTrack bg="rgba(255,255,255,.05)" h={'2px'}>
        <SliderFilledTrack bg="gray.600" />
      </SliderTrack>
      <SliderThumb boxSize={2} />
    </SliderChakra>
  )
}

export default Slider
