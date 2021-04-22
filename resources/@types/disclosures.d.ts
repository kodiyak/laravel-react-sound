declare namespace App {
  export interface Disclosures {
    'Modal.Test': {
      item: any
    }
    'Scale.Test': {
      item: any
    }
  }

  export namespace Disclosures {
    export type Names = keyof App.Disclosures
  }
}
