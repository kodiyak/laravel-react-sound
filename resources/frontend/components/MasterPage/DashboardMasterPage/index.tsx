import React from 'react'
import ContainerScreen from '../../Utils/ContainerScreen'
import Col from '../../Utils/Col'
import Row from '../../Utils/Row'
import { Text } from '@chakra-ui/layout'
import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import { ExploreIcon } from '../../Ux/Icons'
import LogoHorizontal from '../../Ux/Icons/LogoHorizontal'
import SidebarLeft from './src/SidebarLeft/index'
import NavBottom from './src/NavBottom/index'
import NavTop from './src/NavTop/index'

const DashboardMasterPage: React.FC = ({ children }) => {
  return (
    <ContainerScreen>
      <Col h="100%" w="100%" pos="relative">
        <NavTop />
        <Row flex={1} pos="relative" pl={2} overflow="hidden">
          <Col py={2} h="100%" w={250}>
            <SidebarLeft w="100%" rounded="3xl" bg="gray.900" shadow="lg" />
          </Col>
          <Col flex={1} pos="relative" h="100%">
            <Col pos="absolute" top={0} left={0} w="100%" h="100%">
              <Box w="100%" h="100%" overflowY="auto" pt={20} pos="relative">
                {children}
              </Box>
            </Col>
          </Col>
        </Row>
        <NavBottom />
      </Col>
    </ContainerScreen>
  )
}

export default DashboardMasterPage
