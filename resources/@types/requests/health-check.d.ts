declare namespace App {
  export namespace Services {
    export interface HealthCheck {
      php_version: string
      os: string
      server: string
      connections: {
        mysql: boolean
        sqlite: boolean
        pgsql: boolean
        sqlsrv: boolean
      }
    }
  }
}
