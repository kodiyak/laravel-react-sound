import { TypedEmitter } from 'tiny-typed-emitter'

interface DisclosureEvents {
  open: (name: App.Disclosures.Names, data: any) => void
  close: (name: App.Disclosures.Names) => void
}

export class Disclosure extends TypedEmitter<DisclosureEvents> {
  public open<N extends keyof App.Disclosures>(name: N, data?: App.Disclosures[N]) {
    this.emit('open', name, {
      name,
      ...data,
    })
  }

  public close(name: keyof App.Disclosures) {
    this.emit('close', name)
  }
}
