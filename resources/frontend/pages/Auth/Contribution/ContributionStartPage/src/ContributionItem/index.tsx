import { Square } from '@chakra-ui/react'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import Col from '../../../../../../components/Utils/Col'
import Row from '../../../../../../components/Utils/Row'
import TextMini from '../../../../../../components/Utils/TextMini'

interface ContributionItemProps {
  icon: React.ReactNode
  to: LinkProps['to']
  title: string
  description?: string
}

const ContributionItem: React.FC<ContributionItemProps> = ({
  icon,
  title,
  to,
  description,
}) => {
  return (
    <Link to={to} style={{ height: '100%', width: '100%', display: 'flex' }}>
      <Col
        bg="gray.900"
        rounded="3xl"
        cursor="pointer"
        userSelect="none"
        role="group"
        transition="all .2s ease-in-out"
        pos="relative"
        top={0}
        w="100%"
        h="100%"
        _hover={{ top: -4, shadow: 'lg' }}
      >
        <Row justifyContent="center" py={4}>
          <Square
            size={32}
            rounded="2xl"
            bg="rgba(255,255,255,.03)"
            transition="all .1s ease-in-out"
            pos="relative"
            top={0}
            _groupHover={{
              top: -10,
              bg: 'primary.500',
              color: 'white',
              shadow: 'lg',
            }}
          >
            {icon}
          </Square>
        </Row>
        <Row justifyContent="center" pb={4} alignItems="center" flex={1}>
          <TextMini textAlign="center">{title}</TextMini>
        </Row>
        {description && (
          <Row justifyContent="center" pb={4}>
            <TextMini textAlign="center" mt={2} color="gray.500">
              {description}
            </TextMini>
          </Row>
        )}
      </Col>
    </Link>
  )
}

export default ContributionItem
