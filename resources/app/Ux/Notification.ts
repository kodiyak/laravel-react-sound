import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react'
import { theme } from '../../configs'

export class Notification {
  protected toast = createStandaloneToast({ colorMode: 'dark', theme: theme })

  public notify(options?: UseToastOptions) {
    this.toast(options)
  }
}
