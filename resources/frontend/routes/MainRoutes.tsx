import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import LoginPage from '../pages/LoginPage/index'
import AuthRoutes from './AuthRoutes'
import { useAuth } from '../containers/AuthContainer'

const MainRoutes: React.FC = () => {
  const { isAuth } = useAuth()
  return (
    <Switch>
      {!isAuth && (
        <>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={Home} />
        </>
      )}

      {isAuth && <AuthRoutes />}
    </Switch>
  )
}

export default MainRoutes
