import { AuthCredentials } from '../Api/AuthApi'
import App from '../App'
import { TypedEmitter } from 'tiny-typed-emitter'

export class AuthResource extends TypedEmitter<{
  auth: () => void
  loading: () => void
  logout: () => void
}> {
  private _profile?: App.Model.User

  public get profile() {
    return this._profile
  }

  private set profile(profile) {
    this._profile = profile
    this.emit('auth')
  }

  public get token() {
    return App.Api.AuthApi.token
  }

  public getProfile() {
    return App.Api.AuthApi.getProfile().then((profile) => {
      this.profile = profile

      return profile
    })
  }

  public authenticateByCredentials(credentials: AuthCredentials) {
    return App.Api.AuthApi.authenticate(credentials).then((token) => {
      return this.getProfile()
        .then((profile) => {
          console.log('fetch profile', profile)
        })
        .then(() => {
          App.Ux.Router.push('/')
        })
    })
  }

  public async authenticateByToken(silent = false) {
    setTimeout(() => {
      if (this.token) {
        if (!silent) {
          App.Ux.Disclosure.open('Loading.Full')
        }
        this.getProfile()
          .then((profile) => {
            console.log('auth by token', profile)
          })
          .finally(() => {
            App.Ux.Disclosure.close('Loading.Full')
          })
      }
    }, 0)
  }

  public setProfile(user: App.Model.User) {
    this.profile = {
      ...this.profile,
      ...user,
    }
  }

  public logout() {
    App.Api.AuthApi.revokeLocalToken()
    this.profile = undefined
    App.Ux.Router.push('/login')
    this.emit('logout')
  }
}
