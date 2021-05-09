export class RefCount<T> {
  data: Dict<string, { value: T, refCount: number, terminated: boolean }> = {}
  init: (key: string) => T
  deinit: (key: string, value: T) => void

  constructor(init: (key: string) => T, deinit: (key: string, value: T) => void) {
    this.init = init
    this.deinit = deinit
  }

  /** Do not use `arg` after the `callback`'s return value are fulfilled */
  async get<R>(key: string, callback: (arg: T) => Promise<R>): Promise<R> {
    if (!this.data[key]) {
      this.data[key] = { value: this.init(key), refCount: 0, terminated: false }
    }

    const box = this.data[key]!
    box.refCount += 1
    const result = await callback(box.value)
    box.refCount -= 1
    if (!box.refCount && box.terminated) {
      // Last user. Cleaning up
      delete this.data[key]
      this.deinit(key, box.value)
    }
    return result
  }

  delete(key: string) {
    const box = this.data[key]
    if (!box) return

    if (box.refCount) // Someone is using it. Tell them to clean up
      box.terminated = true
    else {
      // Unused, clean up
      delete this.data[key]
      this.deinit(key, box.value)
    }
  }
}