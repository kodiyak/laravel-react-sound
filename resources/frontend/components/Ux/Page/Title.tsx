import React, { useMemo, useEffect } from 'react'
import App from '../../../../app/App'

interface TitleProps {
  prefix?: string
  value?: string
}

const Title: React.FC<TitleProps> = ({ prefix = ' - ', value }) => {
  const name = useMemo(() => App.getConfig().name, [])
  const title = useMemo(() => {
    return value ? `${name}${prefix}${value}` : name
  }, [prefix, value, name])

  useEffect(() => {
    document.title = title
  }, [title])

  return <></>
}

export default Title
