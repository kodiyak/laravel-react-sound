import { TypedEmitter } from 'tiny-typed-emitter'
import * as H from 'history'

type HistoryCallback = (history: H.History<any>) => void

export class Router extends TypedEmitter<{
  history: (fn: HistoryCallback) => void
}> {
  public history(fn: HistoryCallback) {
    this.emit('history', (history) => {
      fn(history)
    })
  }

  public push(...params: Parameters<H.History['push']>) {
    this.history((history) => {
      history.push(...params)
    })
  }
}
