import { ModelBase, DatasourceBase } from "./base";
import { getConfig } from "./config";

export class Repository<Model extends ModelBase<IdType>, Datasource extends DatasourceBase<IdType> , IdType> {

    private datasource: Datasource

    modelClass: {  new(data: object): Model }

    async get(id: IdType, options?: object): Promise<Model> {
        const data = await this.datasource.get(id, {
            ...options,
            ...getConfig(this.modelClass)
        });
        return new this.modelClass(data);
    }

    async create(entity: Model, options?: object) {
       const valid = entity.validate();
       if(!valid.valid) {
            throw new Error(JSON.stringify(valid.errors));
       }
       const data = await this.datasource.create(entity.toJSON(),{
            ...options,
            ...getConfig(this.modelClass)
        });
        return new this.modelClass(data);
    }

    async update(id: IdType, data: Partial<Model>, options?: object) {
       await this.datasource.update(id, data,{
            ...options,
            ...getConfig(this.modelClass)
        });
    }

    async delete(id: IdType, options?: object) {
       await this.datasource.delete(id,{
            ...options,
            ...getConfig(this.modelClass)
        });
    }

    constructor(datasource: Datasource, modelClass: { new(data: any): Model }) {
        this.datasource = datasource;
        this.modelClass = modelClass
        
    }

}


