import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import LoginPage from '../pages/LoginPage/index'
import AuthRoutes from './AuthRoutes'

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={Home} />

      <AuthRoutes />
    </Switch>
  )
}

export default MainRoutes
