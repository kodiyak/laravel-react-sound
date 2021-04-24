import { Heading, Square } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import TitlePage from '../../../Ux/Page/TitlePage'

interface PageHeaderProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon,
  children,
}) => {
  return (
    <Col pb={4}>
      <Col h={32} justifyContent="center">
        <Row alignItems="center">
          {icon && (
            <Square size={16} bg="primary.300" rounded="xl" mr={8}>
              {icon}
            </Square>
          )}
          <TitlePage flex={1}>{title}</TitlePage>
        </Row>
        {description && (
          <Heading mt={4} size="md" color="gray.500">
            {description}
          </Heading>
        )}
      </Col>
      {children}
    </Col>
  )
}

export default PageHeader
