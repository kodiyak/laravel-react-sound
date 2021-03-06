import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal as ModalChakra,
  ModalProps as ModalChakraProps,
  ModalContentProps,
  ModalFooterProps,
  ModalBodyProps,
} from '@chakra-ui/react'
import React from 'react'
import Row from '../../Utils/Row'
import Col from '../../Utils/Col'
import TextMini from '../../Utils/TextMini'
import { useDisclosure } from '../../../hooks/useDisclosure'

interface ModalProps {
  name: keyof App.Disclosures
  title?: string
  description?: string
  _modal?: Partial<ModalChakraProps>
  _content?: ModalContentProps
  _footer?: ModalFooterProps
  _body?: ModalBodyProps
}

const Modal: React.FC<ModalProps> = ({
  name,
  title,
  description,
  children,
  _modal,
  _content,
  _footer,
  _body,
}) => {
  const { onClose, isOpen } = useDisclosure(name)

  return (
    <div>
      <ModalChakra isOpen={isOpen} onClose={onClose} {..._modal}>
        <ModalOverlay />
        <ModalContent rounded="sm" {..._content}>
          <Row>
            <Col>
              {title && <ModalHeader>{title}</ModalHeader>}
              {description && <TextMini>{description}</TextMini>}
            </Col>
          </Row>
          <ModalCloseButton />
          <ModalBody {..._body}>{children}</ModalBody>
          {_footer && <ModalFooter {..._footer}></ModalFooter>}
        </ModalContent>
      </ModalChakra>
    </div>
  )
}

export default Modal
