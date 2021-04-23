import { Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import BoxOverlay from '../../../../Utils/BoxOverlay'
import Col from '../../../../Utils/Col'
import MenuButtonSkeleton from './MenuButtonSkeleton'

const StartCollaborating: React.FC = () => {
  return (
    <Col pos="relative" userSelect="none" cursor="pointer">
      <SimpleGrid gap={2} pos="relative" zIndex={5}>
        <MenuButtonSkeleton opacity={0.5} />
        <MenuButtonSkeleton opacity={0.4} />
        <MenuButtonSkeleton opacity={0.3} />
      </SimpleGrid>
      <BoxOverlay
        zIndex={10}
        bgGradient="linear(to-b, transparent, gray.900)"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="md">Start Contributing</Heading>
      </BoxOverlay>
    </Col>
  )
}

export default StartCollaborating
