import { SimpleGrid, Image, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import App from '../../../../../app/App'
import Col from '../../../Utils/Col'
import Row from '../../../Utils/Row'
import { Text } from '@chakra-ui/layout'

import TextMini from '../../../Utils/TextMini'
import BoxContainer from '../../../Utils/BoxContainer'
import ItemResume from './src/ItemResume'

const AppResume: React.FC = () => {
  const [healthCheck, setHealthCheck] = useState<App.Services.HealthCheck>()
  useEffect(() => {
    App.Services.HealthCheck.check().then(setHealthCheck)
  }, [])

  return (
    <Col>
      <BoxContainer>
        <Row my={2}>
          <Heading>Application Health Check</Heading>
        </Row>
        <SimpleGrid gap={2} columns={5} py={4}>
          <ItemResume
            src={'https://i.imgur.com/UGXLi1S.png'}
            title="PHP Version"
            description={healthCheck?.php_version}
            isLoading={!healthCheck}
          />
          <ItemResume
            src={'https://i.imgur.com/d9on7Bw.png'}
            title="Server"
            description={healthCheck?.server}
            isLoading={!healthCheck}
          />
          <ItemResume
            src={'https://i.imgur.com/3bxMZUM.png'}
            title="Operational System"
            description={healthCheck?.os}
            isLoading={!healthCheck}
          />
        </SimpleGrid>
        <SimpleGrid gap={2} py={4} columns={6}>
          <ItemResume
            src={'https://i.imgur.com/tTHMmwd.jpg'}
            title="Mysql"
            description={
              !healthCheck
                ? undefined
                : healthCheck?.connections.mysql
                ? 'Connected!'
                : 'Disconnected'
            }
            isLoading={!healthCheck}
          />
          <ItemResume
            src={'https://i.imgur.com/xWAQepm.png'}
            title="PostgreSQL"
            description={
              !healthCheck
                ? undefined
                : healthCheck?.connections.pgsql
                ? 'Connected!'
                : 'Disconnected'
            }
            isLoading={!healthCheck}
          />
          <ItemResume
            src={'https://i.imgur.com/a5q1OFe.png'}
            title="SQL Server"
            description={
              !healthCheck
                ? undefined
                : healthCheck?.connections.sqlsrv
                ? 'Connected!'
                : 'Disconnected'
            }
            isLoading={!healthCheck}
          />
          <ItemResume
            src={'https://i.imgur.com/GaKMNIH.png'}
            title="SQLite"
            description={
              !healthCheck
                ? undefined
                : healthCheck?.connections.sqlite
                ? 'Connected!'
                : 'Disconnected'
            }
            isLoading={!healthCheck}
          />
        </SimpleGrid>
      </BoxContainer>
    </Col>
  )
}

export default AppResume
