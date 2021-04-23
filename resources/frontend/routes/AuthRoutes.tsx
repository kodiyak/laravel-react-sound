import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Auth/HomePage/index'
import DashboardMasterPage from '../components/MasterPage/DashboardMasterPage/index'
import NewArtistPage from '../pages/Auth/Artists/NewArtistPage/index'
import ShowPlaylistPage from '../pages/Auth/Playlist/ShowPlaylistPage/index'

const AuthRoutes: React.FC = () => {
  return (
    <DashboardMasterPage>
      <Route path="/artists/new" component={NewArtistPage} />
      <Route path="/playlist/:uuid" component={ShowPlaylistPage} />

      <Route exact path="/" component={HomePage} />
    </DashboardMasterPage>
  )
}

export default AuthRoutes
