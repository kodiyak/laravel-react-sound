import React from 'react'
import ThemeContainer from './containers/ThemeContainer'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import InitializeContainer from './containers/InitializeContainer'

const Root: React.FC = () => {
  return (
    <Router>
      <ThemeContainer>
        <InitializeContainer>
          <MainRoutes />
        </InitializeContainer>
      </ThemeContainer>
    </Router>
  )
}

export default Root
