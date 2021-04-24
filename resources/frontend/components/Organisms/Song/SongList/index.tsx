import React from 'react'
import Col from '../../../Utils/Col'
import SongListItem from '../SongListItem/index'
import Row from '../../../Utils/Row'
import { Box } from '@chakra-ui/react'
import TextMini from '../../../Utils/TextMini'
import { ClockIcon } from '../../../Ux/Icons'

const SongList: React.FC = () => {
  return (
    <>
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
        <Box flex={1}>
          <TextMini fontWeight="normal" letterSpacing={2} color="gray.200">
            Title
          </TextMini>
        </Box>
        <Box flex={1}>
          <TextMini fontWeight="normal" letterSpacing={2} color="gray.200">
            Artist
          </TextMini>
        </Box>
        <Box w="10%">
          <TextMini fontWeight="normal" letterSpacing={2} color="gray.200">
            Álbum
          </TextMini>
        </Box>
        <Box w={20}>
          <ClockIcon />
        </Box>
      </Row>
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
