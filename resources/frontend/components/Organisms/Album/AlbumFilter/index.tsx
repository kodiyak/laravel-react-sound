import React from 'react'
import FilterForm, { FilterFormProps } from '../../Forms/FilterForm'

const AlbumFilter: React.FC<Partial<FilterFormProps>> = (props) => {
  return (
    <FilterForm
      {...props}
      rows={[
        {
          props: { columns: 3 },
          filters: [
            {
              type: 'text',
              name: 'text',
              placeholder: 'Search Album',
            },
          ],
        },
        {
          props: { columns: 2 },
          filters: [
            {
              type: 'checkbox',
              name: 'status',
              container: { columns: 3 },
              props: { isMultiple: true },
              defaultValue: [1, 2, 3],
              options: [
                {
                  label: 'Actives',
                  value: 1,
                },
                {
                  label: 'Inactives',
                  value: 2,
                },
                {
                  label: 'Waiting Approvation',
                  value: 3,
                },
              ],
            },
            {
              type: 'dropdown',
              name: 'sort',
              container: { ml: 'auto', w: 200, mr: 4 },
              defaultValue: 'recent',
              options: [
                {
                  label: 'Most Recent',
                  value: 'recent',
                },
                {
                  label: 'Oldest',
                  value: 'old',
                },
              ],
            },
          ],
        },
      ]}
    />
  )
}

export default AlbumFilter
