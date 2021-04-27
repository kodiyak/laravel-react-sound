declare namespace App {
  export interface Disclosures {
    'Modal.Test': {
      item: any
    }
    'Modal.Playlist': {}
    'Scale.Test': {
      item: any
    }
    'Loading.Full': undefined
  }

  export namespace Disclosures {
    export type Names = keyof App.Disclosures
  }
}
