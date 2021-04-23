import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Auth/HomePage'
import DashboardMasterPage from '../components/MasterPage/DashboardMasterPage'
import NewArtistPage from '../pages/Auth/Artists/NewArtistPage'
import ShowPlaylistPage from '../pages/Auth/Playlist/ShowPlaylistPage'
import ShowAlbumPage from '../pages/Auth/Albuns/ShowAlbumPage'
import NewAlbumPage from '../pages/Auth/Albuns/NewAlbumPage'

const AuthRoutes: React.FC = () => {
  return (
    <DashboardMasterPage>
      <Switch>
        <Route path="/artist/new" component={NewArtistPage} />
        <Route path="/playlist/:uuid" component={ShowPlaylistPage} />

        <Route exact path="/album/new" component={NewAlbumPage} />
        <Route path="/album/:uuid" component={ShowAlbumPage} />

        <Route exact path="/" component={HomePage} />
      </Switch>
    </DashboardMasterPage>
  )
}

export default AuthRoutes
