declare namespace App {
  export namespace Model {
    export interface User extends App.Model {
      uuid: string
      username: string
      avatar: string
      first_name: string
      last_name: string
      email: string
      email_verified_at: Date
      is_banned?: 0 | 1 | boolean
      ban_reason?: string
      role?: 0 | 1
      is_contributor?: 0 | 1 | boolean
    }
  }
}
