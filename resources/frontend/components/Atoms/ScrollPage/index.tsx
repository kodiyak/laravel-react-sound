import React from 'react'
import FullPage from '../FullPage'

const ScrollPage: React.FC = ({ ...rest }) => {
  return <FullPage overflowY="scroll" {...rest} />
}

export default ScrollPage
