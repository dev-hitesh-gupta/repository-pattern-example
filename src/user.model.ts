import { ModelBase } from "./base";


export class User extends ModelBase<string> {
  getId(): string {
      return this.username
  }
  static readonly config =  {
    apiBase: "https://petstore.swagger.io/v2/user"
  };
  id: number
  username: string
  firstName: string
  lastName: string
  email: string

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(data: {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    userStatus: number
  }) {
    super();
    this.id = data.id;
    this.username = data.username;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email ?? [];
  }

  

  toJSON(): object {
    return {
      id: this.id,
      category: this.username,
      name: this.firstName,
      photoUrls: this.lastName,
      tags: this.email,
    };
  }
}
