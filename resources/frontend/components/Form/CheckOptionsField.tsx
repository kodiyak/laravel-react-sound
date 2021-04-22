import React from 'react'
import Row from '../Utils/Row'
import SquareCheck from '../Utils/SquareCheck'
import {
  SelectOptionProps,
  useSelectOption,
} from '../../hooks/helpers/useSelectOption'

interface CheckOptionsFieldProps extends SelectOptionProps {
  CheckComponent?: React.FC
}

const CheckOptionsField: React.FC<CheckOptionsFieldProps> = ({
  CheckComponent = SquareCheck,
  ...props
}) => {
  const { options, getLabel, isItemSelected, toggleItem, field } = useSelectOption(
    props
  )

  return (
    <>
      {options.map((option, keyOption) => (
        <Row
          key={`options${keyOption}`}
          cursor="pointer"
          alignItems="center"
          userSelect="none"
          onClick={() => toggleItem(option)}
          role="group"
        >
          {/* @ts-ignore */}
          <CheckComponent isChecked={isItemSelected(option)} mr={4} />
          {getLabel(option)}
        </Row>
      ))}
    </>
  )
}

export default CheckOptionsField
