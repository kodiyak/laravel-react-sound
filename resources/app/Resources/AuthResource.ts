import { AuthCredentials } from '../Api/AuthApi'
import App from '../App'
import { TypedEmitter } from 'tiny-typed-emitter'

export class AuthResource extends TypedEmitter<{
  auth: () => void
  loading: () => void
}> {
  private _isLoading = false

  public get isLoading() {
    return this._isLoading
  }

  public set isLoading(isLoading) {
    this.emit('loading')
    if (isLoading) {
      App.Ux.Disclosure.open('Loading.Full')
    } else {
      App.Ux.Disclosure.close('Loading.Full')
    }
    this._isLoading = isLoading
  }

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
    this.isLoading = true
    return App.Api.AuthApi.authenticate(credentials).then((token) => {
      console.log('token auth', token)
      return this.getProfile().then((profile) => {
        console.log('fetch profile', profile)
        this.isLoading = false
      })
    })
  }

  public async authenticateByToken() {
    setTimeout(() => {
      if (this.token) {
        App.Ux.Disclosure.open('Loading.Full')
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
}
