import Ux from './Ux'
import axios from 'axios'
import Services from './Services'

class App {
  public Axios = axios.create({
    baseURL: this.getConfig().apiURL,
  })

  public Ux = Ux

  public Services = Services

  public getConfig() {
    // @ts-ignore
    return APP_CONFIG as App.StaticConfig
  }
}

export default new App()
