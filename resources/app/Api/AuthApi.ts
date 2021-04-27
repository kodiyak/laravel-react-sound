import App from '../App'
import axios from 'axios'

export interface AuthCredentials {
  username: string
  password: string
}

export class AuthApi {
  private authPayload = {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'lu7EpkifHRdN9nFxhSETF0b17M4FWfeRkLu2HiWi',
  }

  public authenticate(credentials: AuthCredentials) {
    return App.Axios.post('/oauth/token', {
      ...this.authPayload,
      ...credentials,
    })
      .then((res) => {
        console.log('res', res.data)
      })
      .catch((err) => {
        console.error('error', err)
      })
  }
}
