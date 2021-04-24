import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import Col from '../../../../../components/Utils/Col'
import Row from '../../../../../components/Utils/Row'
import TextMini from '../../../../../components/Utils/TextMini'
import { AlbumIcon, ClockIcon, DownIcon } from '../../../../../components/Ux/Icons'
import ScrollPage from '../../../../../components/Atoms/ScrollPage/index'
import TableHeader from '../../../../../components/Atoms/Table/TableHeader/index'
import PageHeader from '../../../../../components/Atoms/Headers/PageHeader/index'
import CheckOptionsField from '../../../../../components/Form/CheckOptionsField'
import { Text } from '@chakra-ui/layout'
import { FormProvider } from '../../../../../contexts/FormProvider'
import DropdownOptionsInput from '../../../../../components/Form/DropdownOptionsField'
import InputField from '../../../../../components/Form/InputField'
import SearchHeader from '../../../../../components/Atoms/Headers/SearchHeader/index'
import AlbumFilter from '../../../../../components/Organisms/Album/AlbumFilter/index'

const AdminAlbunsListPage: React.FC = () => {
  return (
    <ScrollPage>
      <Col px={4}>
        <PageHeader icon={<AlbumIcon size={40} />} title="List Albums" />
        <TextMini color="gray.500">Filter</TextMini>
        <AlbumFilter />
      </Col>
      <TableHeader
        items={[
          {
            text: 'Title',
            props: { flex: 1 },
          },
          {
            text: 'Artist',
            props: { flex: 1 },
          },
          {
            text: 'Status',
            props: { w: '10%' },
          },
          {
            icon: <ClockIcon />,
            props: { w: 20 },
          },
        ]}
      />
      <Col h={1500} />
    </ScrollPage>
  )
}

export default AdminAlbunsListPage
