declare namespace App {
  export namespace Model {
    export interface Playlist extends App.Model {
      title: string
      description: string
      user_id: number
      avatar: string | File
      user?: App.Model.User
      followers?: App.Model.User
    }
  }
}
