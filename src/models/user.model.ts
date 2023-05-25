import { ModelBase } from "../base";
import { config } from "../config";
import { property } from "../property";


export namespace Model {
  @config({
    apiBase: "https://petstore.swagger.io/v2/user",
  })
  export class User extends ModelBase<string> {
    getId(): string {
      return this.id.toString();
    }

    @property({
      required: true,
      type: 'number'
    })
    id: number;

    @property({
      required: true,
      type: 'string'
    })
    firstName?: string;

    @property({
      required: false,
      type: 'string'
    })
    lastName?: string;

    @property({
      type: 'string',
      required: false
    })
    username?: string


    public get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }


    constructor(data: {
      id: number;
      firstName?: string;
      lastName?: string;
      dob?: Date;
      anDate?: Date;
    }) {
      super();
      this.id = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
    }


    toJSON(): object {
      return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
      };
    }
  }
}