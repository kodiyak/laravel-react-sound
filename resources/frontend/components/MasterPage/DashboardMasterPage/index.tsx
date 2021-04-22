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

const DashboardMasterPage: React.FC = ({ children }) => {
  return (
    <ContainerScreen>
      <Col h="100%" w="100%">
        <Row flex={1}>
          <SidebarLeft w={200} />
          <Col flex={1} pos="relative">
            <Col
              pos="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              overflowY="scroll"
            >
              {children}
            </Col>
          </Col>
        </Row>
        <NavBottom />
      </Col>
    </ContainerScreen>
  )
}

export default DashboardMasterPage
