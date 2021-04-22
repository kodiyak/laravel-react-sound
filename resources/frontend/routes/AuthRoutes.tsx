import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Auth/HomePage/index'

const AuthRoutes: React.FC = () => {
  return (
    <>
      <Route path="/admin" component={HomePage} />
    </>
  )
}

export default AuthRoutes
