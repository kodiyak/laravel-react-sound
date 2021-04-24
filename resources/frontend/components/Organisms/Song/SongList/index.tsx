import React from 'react'
import Col from '../../../Utils/Col'
import SongListItem from '../SongListItem/index'
import Row from '../../../Utils/Row'
import { Box } from '@chakra-ui/react'
import TextMini from '../../../Utils/TextMini'
import { ClockIcon } from '../../../Ux/Icons'
import TableHeader from '../../../Atoms/Table/TableHeader'

const SongList: React.FC = () => {
  return (
    <>
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
            text: 'Album',
            props: { w: '10%' },
          },
          {
            icon: <ClockIcon />,
            props: { w: 20 },
          },
        ]}
      />
      <Col>
        <SongListItem />
        <SongListItem />
        <SongListItem />
        <SongListItem />
        <SongListItem />
        <SongListItem />
        <SongListItem />
        <SongListItem />
      </Col>
    </>
  )
}

export default SongList
