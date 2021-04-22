import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  MenuItemProps,
  ButtonProps,
} from '@chakra-ui/react'
import {
  SelectOptionProps,
  useSelectOption,
} from '../../hooks/helpers/useSelectOption'
import SquareCheck from '../Utils/SquareCheck'

interface DropdownOptionsInputProps extends SelectOptionProps {
  withCheck?: boolean
  _container?: ButtonProps
  _item?: MenuItemProps
}

const DropdownOptionsInput: React.FC<DropdownOptionsInputProps> = ({
  withCheck = true,
  _item,
  _container,
  children,
  ...props
}) => {
  const { options, getLabel, isItemSelected, toggleItem, field } = useSelectOption(
    props
  )
  return (
    <Menu closeOnSelect={false} matchWidth placement="bottom">
      <MenuButton userSelect="none" cursor="pointer" as={Box} {..._container}>
        {children}
      </MenuButton>
      <MenuList border={0} rounded="sm" shadow="lg">
        {options.map((option, keyOption) => (
          <MenuItem
            onClick={() => toggleItem(option)}
            key={`options${keyOption}`}
            rounded="none"
            bg={isItemSelected(option) ? 'gray.600' : undefined}
            color={isItemSelected(option) ? 'white' : undefined}
            _hover={isItemSelected(option) ? { bg: 'gray.600' } : undefined}
            _focus={isItemSelected(option) ? { bg: 'gray.600' } : undefined}
            {..._item}
          >
            {withCheck && <SquareCheck mr={4} isChecked={isItemSelected(option)} />}
            {getLabel(option)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default DropdownOptionsInput
