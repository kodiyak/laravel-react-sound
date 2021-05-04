declare namespace App {
  export namespace Model {
    export interface Album extends App.Model {
      uuid: string
      real_name: string
      artistic_name: string
      description?: string
      user_id: number
      item_image_avatar_id: number
      item_image_cover_id: number
      approve_detail_id: number
      avatar?: App.Model.ItemImage
      cover?: App.Model.ItemImage
    }
  }
}
