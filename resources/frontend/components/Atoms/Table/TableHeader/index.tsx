import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import Row from '../../../Utils/Row'
import TextMini from '../../../Utils/TextMini'

interface TableHeaderProps extends BoxProps {
  items: Array<{
    text?: string
    props?: BoxProps
    icon?: React.ReactNode
  }>
}

const TableHeader: React.FC<TableHeaderProps> = ({ items }) => {
  return (
    <Row
      h={8}
      bg="gray.800"
      zIndex={90}
      borderBottom="1px solid transparent"
      borderColor="gray.700"
      pos="sticky"
      top={0}
      left={0}
      pl={14}
      alignItems="center"
    >
      {items.map((item, keyItem) => (
        <Box key={`tableHeader${keyItem}`} {...item.props}>
          {item.text && (
            <TextMini fontWeight="normal" letterSpacing={2} color="gray.200">
              {item.text}
            </TextMini>
          )}
          {item.icon && item.icon}
        </Box>
      ))}
    </Row>
  )
}

export default TableHeader
