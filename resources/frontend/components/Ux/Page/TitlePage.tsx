import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

interface TitlePageProps extends HeadingProps {}

const TitlePage: React.FC<TitlePageProps> = (props) => {
  return <Heading size="2xl" {...props} />
}

export default TitlePage
