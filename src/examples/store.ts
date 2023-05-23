type Constructor<T = {}> = new (...args: any[]) => T;

export class Store {
  private _data: object = {};
  static instance: Store;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Store();
    }
    return this.instance;
  }

  get data(): {[k: string]: any} {
    return this._data;
  }

  set data(value: object) {
    this._data = {
      ...this._data,
      ...value,
    };
  }

  private constructor() {}
}

export function StoreAccessMixin<T extends Constructor>(Base: T) {
  return class StoreAccess extends Base {
    private _store = Store.getInstance();

    protected getFromStore<Model>(key: string): Model {
        const data = this._store.data;
        return data[key]
    }

    protected setToStore<Model>(key: string, data: Model) {
        this._store.data[key] = data;
    }
  };
}
