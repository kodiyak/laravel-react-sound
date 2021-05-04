declare namespace App {
  export namespace Model {
    export interface Album extends App.Model {
      uuid: string
      title: string
      type: string
      release_year: number
      is_featured: 0 | 1 | boolean
      user_id: number
      item_image_cover_id: number
      item_image_avatar_id: number
      approve_detail_id: number
      avatar?: App.Model.ItemImage
      cover?: App.Model.ItemImage
    }
  }
}
