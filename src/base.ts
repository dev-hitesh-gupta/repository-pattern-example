
export interface DatasourceBase<T> {

    get(id: T, options?: object): Promise<object>

    create(data: object, options?: object): Promise<object>

    update(id: T, data: object, options?: object): Promise<void>

    delete(id: T, options?: object): Promise<void>
}

export abstract class ModelBase<T> {
    static readonly config: object;
    abstract getId(): T; 
    abstract toJSON(): object 

}
