import Ux from './Ux'
import axios from 'axios'
import Services from './Services'
import Api from './Api'
import Resources from './Resources'

class App {
  public Axios = axios.create({
    baseURL: this.getConfig().apiURL,
  })

  public Ux: typeof Ux

  public Services: typeof Services

  public Api: typeof Api

  public Resources: typeof Resources

  public constructor() {
    const self = this
    this.Axios.interceptors.response.use(undefined, function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          self.Resources.AuthResource.logout()
        }
      }
      return Promise.reject(error)
    })

    this.Api = Api
    this.Services = Services
    this.Ux = Ux
    this.Resources = Resources
  }

  public getConfig() {
    // @ts-ignore
    return window.APP_CONFIG as App.StaticConfig
  }
}

export default new App()
