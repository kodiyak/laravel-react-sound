import { Collection } from 'collect.js'
import { TypedEmitter } from 'tiny-typed-emitter'

export class Collect<T> extends TypedEmitter<{
  add: (item: Partial<T>) => void
  update: (item: Partial<T>) => void
  delete: (item: Partial<T>) => void
  loading: (isLoading: boolean) => void
}> {
  private _collection = new Collection<T>()

  private _isLoading = false

  public get isLoading() {
    return this._isLoading
  }

  public set isLoading(isLoading) {
    this._isLoading = isLoading
    this.emit('loading', isLoading)
  }

  public get collection() {
    return this._collection
  }

  public matchField = 'id'

  public set(item: Partial<T>, emit = true) {
    if (this.exists(item)) {
      const key = this.findKey(item)
      const oldItem = this.find(item)
      if (key === false) return this

      this._collection.put(key, {
        ...oldItem,
        ...item,
      })

      if (emit) this.emit('update', item)
    } else {
      // @ts-ignore
      this._collection.push(item)

      if (emit) this.emit('add', item)
    }

    return this
  }

  public delete(item: Partial<T>, emit = true) {
    if (this.exists(item)) {
      let itemDeleted: any
      this._collection = this._collection.filter((currentItem) => {
        const isItem = this.is(item, currentItem)

        if (isItem) itemDeleted = currentItem

        return !isItem
      })

      if (emit) this.emit('delete', itemDeleted)
    }

    return this
  }

  public exists(item: Partial<T>) {
    return !!this.find(item)
  }

  public find(item: Partial<T>) {
    return this._collection.first((currentItem) => this.is(item, currentItem))
  }

  public findKey(item: Partial<T>): number | false {
    return this._collection.search((currentItem) => this.is(item, currentItem))
  }

  public is(first: Partial<T>, second: Partial<T>) {
    return first[this.matchField] === second[this.matchField]
  }
}
