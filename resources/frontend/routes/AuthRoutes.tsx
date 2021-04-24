import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/Auth/HomePage'
import DashboardMasterPage from '../components/MasterPage/DashboardMasterPage'
import NewArtistPage from '../pages/Auth/Artists/NewArtistPage'
import ShowPlaylistPage from '../pages/Auth/Playlist/ShowPlaylistPage'
import ShowAlbumPage from '../pages/Auth/Albuns/ShowAlbumPage'
import NewAlbumPage from '../pages/Auth/Albuns/NewAlbumPage'
import ContributionTracksPage from '../pages/Auth/Contribution/ContributionTracksPage'
import ContributionAlbumsPage from '../pages/Auth/Contribution/ContributionAlbumsPage'
import ContributionArtistsPage from '../pages/Auth/Contribution/ContributionArtistsPage'
import LibraryRecentPage from '../pages/Auth/Library/LibraryRecentPage'
import LibraryArtistsPage from '../pages/Auth/Library/LibraryArtistsPage'
import LibraryAlbumsPage from '../pages/Auth/Library/LibraryAlbumsPage'
import LibraryFavoritesPage from '../pages/Auth/Library/LibraryFavoritesPage'
import ExplorePage from '../pages/Auth/ExplorePage'
import ContributionStartPage from '../pages/Auth/Contribution/ContributionStartPage'
import SettingsProfilePage from '../pages/Auth/Settings/SettingsProfilePage'
import AdminDashboardPage from '../pages/Auth/Admin/AdminDashboardPage'

const AuthRoutes: React.FC = () => {
  return (
    <DashboardMasterPage>
      <Switch>
        <Route path="/artist/new" component={NewArtistPage} />
        <Route path="/playlist/:uuid" component={ShowPlaylistPage} />

        <Route exact path="/album/new" component={NewAlbumPage} />
        <Route path="/album/:uuid" component={ShowAlbumPage} />

        <Route path="/contributions/start" component={ContributionStartPage} />
        <Route path="/contributions/tracks" component={ContributionTracksPage} />
        <Route path="/contributions/albums" component={ContributionAlbumsPage} />
        <Route path="/contributions/artists" component={ContributionArtistsPage} />

        <Route path="/settings/profile" component={SettingsProfilePage} />

        <Route path="/recent" component={LibraryRecentPage} />
        <Route path="/library/artists" component={LibraryArtistsPage} />
        <Route path="/library/albums" component={LibraryAlbumsPage} />
        <Route path="/favorites" component={LibraryFavoritesPage} />

        <Route path="/admin/dashboard" component={AdminDashboardPage} />

        <Route path="/explore" component={ExplorePage} />

        <Route exact path="/" component={HomePage} />
      </Switch>
    </DashboardMasterPage>
  )
}

export default AuthRoutes
