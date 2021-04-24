import { Square, Heading } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../../../../components/Utils/Col'
import Row from '../../../../../../components/Utils/Row'

interface StatItemProps {
  icon?: React.ReactNode
  title: string
  description?: string
  colorScheme?: string
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  title,
  description,
  children,
  colorScheme = 'primary',
}) => {
  const headingColor = `${colorScheme}.300`
  const squareColor = `${colorScheme}.400`

  return (
    <Col bg="gray.900" rounded="lg" shadow="md">
      <Row p={2} alignItems="center">
        {icon && (
          <Square size={20} color="white" rounded="50%" bg={squareColor}>
            {icon}
          </Square>
        )}
        <Col pl={4} flex={1}>
          {description && (
            <Heading
              size="md"
              textAlign="right"
              color={headingColor}
              userSelect="none"
            >
              {description}
            </Heading>
          )}
          <Heading size="2xl">{title}</Heading>
        </Col>
      </Row>
      {children}
    </Col>
  )
}

export default StatItem
