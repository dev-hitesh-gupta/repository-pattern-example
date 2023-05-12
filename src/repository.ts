import { ModelBase, DatasourceBase } from "./base";

export class Repository<Model extends ModelBase<IdType>, Datasource extends DatasourceBase<IdType> , IdType> {

    private datasource: Datasource

    modelClass: { config: object, new(data: object): Model }

    async get(id: IdType, options?: object): Promise<Model> {
        const data = await this.datasource.get(id, {
            ...options,
            ...this.modelClass.config
        });
        return new this.modelClass(data);
    }

    async create(entity: Model, options?: object) {
       const data = await this.datasource.create(entity.toJSON(),{
            ...options,
            ...this.modelClass.config
        });
        return new this.modelClass(data);
    }

    async update(id: IdType, data: Partial<Model>, options?: object) {
       await this.datasource.update(id, data,{
            ...options,
            ...this.modelClass.config
        });
    }

    async delete(id: IdType, options?: object) {
       await this.datasource.delete(id,{
            ...options,
            ...this.modelClass.config
        });
    }

    constructor(datasource: Datasource, modelClass: { config: object, new(data: any): Model }) {
        this.datasource = datasource;
        this.modelClass = modelClass
    }

}


