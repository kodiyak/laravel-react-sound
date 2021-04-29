import App from '../App'
import { FormStoreData } from '../Helpers/FormStoreData'

export class UserApi {
  public update(user: App.Model.User, data: any) {
    const formData = new FormStoreData(data)
    formData.append('_method', 'PUT')

    return App.Axios.post<App.Model.User>(
      `/users/${user.uuid}`,
      formData.getData()
    ).then((res) => res.data)
  }
}
