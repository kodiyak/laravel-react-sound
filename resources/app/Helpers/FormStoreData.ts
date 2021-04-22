type StrictValue = File | FileList | string | number | boolean

export class FormStoreData<T> {
  private _data: T

  private _id: number | string

  private _fieldID = 'id'

  private get hasFile() {
    for (const value of this._data as any) {
      if (value instanceof File) {
        return true
      }
    }
    return false
  }

  private get hasFileList() {
    for (const value of this._data as any) {
      if (value instanceof FileList) {
        return true
      }
    }
    return false
  }

  private get isFormData() {
    return this.hasFile || this.hasFileList
  }

  public constructor(data?: T) {
    if (data) {
      this._data = data
    } else {
      // @ts-ignore
      this._data = {}
    }
  }

  public append(fieldName: keyof T, value: StrictValue) {
    this._data[fieldName as any] = value

    return this
  }

  public getId(): string | number {
    if (this._id) return this._id
    return this._data[this._fieldID]
  }

  public fill(data: Partial<T>) {
    for (const fieldName in data) {
      this.append(fieldName, data[fieldName] as any)
    }

    return this
  }

  public getData() {
    if (this.isFormData) {
      return this.toFormData()
    } else {
      return this._data
    }
  }

  private toFormData() {
    const formData = new FormData()

    for (const fieldName in this._data) {
      const value = this._data[fieldName]
      formData.append(fieldName, value as any)
    }

    return formData
  }
}
