import { getSchema } from "./property";

import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats"
export interface DatasourceBase<T> {

    get(id: T, options?: object): Promise<object>

    create(data: object, options?: object): Promise<object>

    update(id: T, data: object, options?: object): Promise<void>

    delete(id: T, options?: object): Promise<void>
}

export abstract class ModelBase<T> {

    abstract getId(): T; 
    abstract toJSON(): object 

    validate() {
        const schema =  getSchema(this);
        console.log(schema)
        const ajv = new Ajv(); // Initialize Ajv with default options
        addFormats(ajv)
        const validate = ajv.compile(schema);
        const isValid = validate(this);
        if (isValid) {
          return {valid: true}
        } else {
          return {valid: false , errors: validate.errors}
        }
      }

}
