declare namespace App {
  export interface StaticConfig {
    name: string
    appURL: string
    apiURL: string
    LOGOS: {
      horizontal: {
        black: string
        white: string
      }
    }
    AUTH: {
      grant_type: string
      client_id: number
      client_secret: string
    }
  }
}
