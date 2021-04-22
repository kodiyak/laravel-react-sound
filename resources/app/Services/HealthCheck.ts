import axios from 'axios'
import App from '../App'

export class HealthCheck {
  public check() {
    return App.Axios.get<App.Services.HealthCheck>('/health-check').then(
      (res) => res.data
    )
  }
}
