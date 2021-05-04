declare namespace App {
  export namespace Model {
    export interface Track extends App.Model {
      uuid: string
      title: string
      description: string
      path_track: string
      album_id: number
      user_id: number
      item_image_avatar_id: number
      approve_detail_id: number
      album?: any
    }
  }
}
