import { Heading } from '@chakra-ui/react'
import React from 'react'
import Col from '../../../Utils/Col'
import TitlePage from '../../../Ux/Page/TitlePage'

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <Col h={32} justifyContent="center">
      <TitlePage>{title}</TitlePage>
      {description && (
        <Heading mt={4} size="md" color="gray.500">
          {description}
        </Heading>
      )}
      {children}
    </Col>
  )
}

export default PageHeader
