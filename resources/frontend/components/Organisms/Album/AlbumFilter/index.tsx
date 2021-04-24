import React, { useState, useMemo, useEffect } from 'react'
import Col from '../../../Utils/Col'
import { FormProvider } from '../../../../contexts/FormProvider'
import { SimpleGrid, Box } from '@chakra-ui/react'
import SearchHeader from '../../../Atoms/Headers/SearchHeader'
import CheckOptionsField from '../../../Form/CheckOptionsField'
import DropdownOptionsInput from '../../../Form/DropdownOptionsField'
import Row from '../../../Utils/Row'
import TextMini from '../../../Utils/TextMini'
import { DownIcon } from '../../../Ux/Icons'

const AlbumFilter: React.FC = () => {
  const statuses = useMemo(
    () => [
      {
        label: 'Actives',
        id: 1,
      },
      {
        label: 'Inactives',
        id: 2,
      },
      {
        label: 'Waiting Approvation',
        id: 3,
      },
    ],
    []
  )

  const orders = useMemo(
    () => [
      {
        label: 'Most Recent',
        id: 'recent',
      },
      {
        label: 'Oldest',
        id: 'old',
      },
    ],
    []
  )

  const [order, setOrder] = useState(orders[0])
  const [status, setStatus] = useState(statuses)
  const [text, setText] = useState('')

  const value = useMemo(
    () => ({
      order,
      status,
      text,
    }),
    [order, status, text]
  )

  useEffect(() => {
    console.log('change filter', value)
  }, [value])

  return (
    <FormProvider>
      <Col>
        <SimpleGrid columns={3}>
          <SearchHeader
            _input={{ onChange: (e) => setText(e.target.value), value: text }}
            placeholder="Search Album..."
          />
        </SimpleGrid>
        <SimpleGrid columns={2}>
          <SimpleGrid columns={3} gap={4}>
            <CheckOptionsField
              isMultiple
              name="checkbox"
              index="id"
              label="label"
              options={statuses}
              defaultValue={[1, 2, 3]}
              onChange={setStatus}
            />
          </SimpleGrid>
          <Row>
            <Box w={200} ml="auto" mr={4}>
              <DropdownOptionsInput
                name="sort"
                label="label"
                index="id"
                _container={{ h: '100%', w: '100%' }}
                _menu={{ placement: 'bottom-end' }}
                options={orders}
                onChange={setOrder}
                defaultValue={'recent'}
              >
                <Row alignItems="center" h="100%" w="100%">
                  <TextMini mr={'auto'}>{order.label}</TextMini>
                  <DownIcon />
                </Row>
              </DropdownOptionsInput>
            </Box>
          </Row>
        </SimpleGrid>
      </Col>
    </FormProvider>
  )
}

export default AlbumFilter
