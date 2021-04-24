import React from 'react'
import { Square, Image } from '@chakra-ui/react'
import Col from '../../../../../../components/Utils/Col'
import Row from '../../../../../../components/Utils/Row'
import { Text } from '@chakra-ui/layout'
import SlideLeftGroupHover from '../../../../../../components/Utils/GroupHover/SlideLeftGroupHover'
import { RightIcon } from '../../../../../../components/Ux/Icons'
import { Link, LinkProps } from 'react-router-dom'

interface ListItemProps {
  src?: string
  icon?: React.ReactNode
  to: LinkProps['to']
  title: string
  description?: string
}

const ListItem: React.FC<ListItemProps> = ({
  src,
  icon,
  to,
  title,
  description,
}) => {
  return (
    <Link to={to}>
      <Row
        color="gray.500"
        _hover={{ color: 'white' }}
        role="group"
        cursor="pointer"
        userSelect="none"
        alignItems="center"
      >
        {(src || icon) && (
          <Square
            size={10}
            ml={2}
            rounded="lg"
            bg="gray.800"
            border="2px solid transparent"
            borderColor="gray.500"
            _groupHover={{ borderColor: 'primary.500' }}
          >
            {src && (
              <Image src={src} w="100%" h="100%" rounded="lg" objectFit="contain" />
            )}
            {icon && icon}
          </Square>
        )}
        <Col flex={1} pl={2}>
          <Text fontWeight="bold">{title}</Text>
          {description && <Text fontSize="xs">{description}</Text>}
        </Col>
        <SlideLeftGroupHover transition="all .2s ease-in-out">
          <Square size={10}>
            <RightIcon />
          </Square>
        </SlideLeftGroupHover>
      </Row>
    </Link>
  )
}

export default ListItem
