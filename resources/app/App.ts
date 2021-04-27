import Ux from './Ux'
import axios from 'axios'
import Services from './Services'
import Api from './Api'

class App {
  public Axios = axios.create({
    baseURL: this.getConfig().apiURL,
  })

  public Ux: typeof Ux

  public Services: typeof Services

  public Api: typeof Api

  public constructor() {
    this.Api = Api
    this.Services = Services
    this.Ux = Ux
  }

  public getConfig() {
    // @ts-ignore
    return window.APP_CONFIG as App.StaticConfig
  }
}

export default new App()
