import React from 'react'
import ThemeContainer from './containers/ThemeContainer'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import InitializeContainer from './containers/InitializeContainer'
import RouteListener from './components/Organisms/Listeners/RouteListener'

const Root: React.FC = () => {
  return (
    <Router>
      <RouteListener />
      <ThemeContainer>
        <InitializeContainer>
          <MainRoutes />
        </InitializeContainer>
      </ThemeContainer>
    </Router>
  )
}

export default Root
