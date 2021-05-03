import App from '../App'
import axios from 'axios'

export interface AuthCredentials {
  username: string
  password: string
}

interface AuthToken {
  access_token: string
  expires_in: number
  refresh_token: string
  token_type: string
}

export class AuthApi {
  private AUTH_TOKEN = 'auth.token'

  private _token?: AuthToken

  public get token() {
    return this._token
  }

  public set token(token) {
    this.setLocalToken(token).authenticateAxios(token)
    this._token = token
  }

  public constructor() {
    setTimeout(() => {
      const token = this.getLocalToken()
      if (token) {
        this.token = token
      }
    }, 0)
  }

  public authenticate(credentials: AuthCredentials) {
    const authPayload = App.getConfig().AUTH
    return App.Axios.post<AuthToken>('/oauth/token', {
      ...authPayload,
      ...credentials,
    }).then((res) => {
      this.token = res.data
      return res.data
    })
  }

  public getLocalToken() {
    const token = localStorage.getItem(this.AUTH_TOKEN)

    if (!token) return

    return JSON.parse(token) as AuthToken
  }

  public setLocalToken(token: AuthToken) {
    localStorage.setItem(this.AUTH_TOKEN, JSON.stringify(token))

    return this
  }

  public revokeLocalToken() {
    localStorage.removeItem(this.AUTH_TOKEN)

    return this
  }

  private authenticateAxios(token: AuthToken) {
    App.Axios.defaults.headers.Authorization = `${token.token_type} ${token.access_token}`

    return this
  }

  public getProfile() {
    return App.Axios.get<App.Model.User>('/oauth/profile').then((res) => res.data)
  }
}
