import React from 'react'
import Home from '../Home'
import { Switch, Route, Link } from 'react-router-dom'

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default MainRoutes
