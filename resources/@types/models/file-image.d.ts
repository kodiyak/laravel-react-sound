declare namespace App {
  export namespace Model {
    export namespace ItemImage {
      export interface FileImage extends App.Model {
        path: string
        size: string
        metadata: {
          width?: number
          height?: number
        }
        item_image_id: number
      }
    }

    export interface ItemImage extends App.Model {
      folder: string
      images: Array<App.Model.ItemImage.FileImage>
    }
  }
}
