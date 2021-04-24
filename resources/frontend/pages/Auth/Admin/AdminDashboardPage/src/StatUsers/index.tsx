import { SimpleGrid, Button } from '@chakra-ui/react'
import React from 'react'
import Row from '../../../../../../components/Utils/Row'
import { UserIcon } from '../../../../../../components/Ux/Icons'
import StatItem from '../StatItem'
import ListItem from '../ListItem'

const StatUsers: React.FC = () => {
  return (
    <StatItem title="1.500" description="Users" icon={<UserIcon size={40} />}>
      <SimpleGrid gap={2} pb={2}>
        <ListItem
          src="https://i.pinimg.com/originals/0c/52/7f/0c527f2b2d112a2237f7c5cab5b7188c.jpg"
          title="User Name"
          to="/user/uuid-user"
        />
        <ListItem
          src="https://i.pinimg.com/originals/0c/52/7f/0c527f2b2d112a2237f7c5cab5b7188c.jpg"
          title="User Name"
          to="/user/uuid-user"
        />
        <ListItem
          src="https://i.pinimg.com/originals/0c/52/7f/0c527f2b2d112a2237f7c5cab5b7188c.jpg"
          title="User Name"
          to="/user/uuid-user"
        />
        <Row px={2} mt="auto">
          <Button size="sm" ml="auto">
            See all
          </Button>
        </Row>
      </SimpleGrid>
    </StatItem>
  )
}

export default StatUsers
