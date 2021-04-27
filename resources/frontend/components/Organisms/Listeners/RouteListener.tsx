import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import App from '../../../../app/App'

const RouteListener: React.FC = () => {
  const history = useHistory()

  useEffect(() => {
    console.log('route listener')
    App.Ux.Router.on('history', (fn) => {
      fn(history)
    })
  }, [])

  return <></>
}

export default RouteListener
