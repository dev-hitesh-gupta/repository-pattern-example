import { ModelBase } from "./base";

export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface PetsNameId {
  id: Required<number>;
  name: string;
}

export class Pets extends ModelBase<number> {
  getId(): number {
      return this.id;
  }
  static readonly config =  {
    apiBase: "https://petstore.swagger.io/v2/pet"
  };
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: string;

  constructor(data: {
    id: number;
    category: Category;
    name: string;
    photoUrls: string[];
    tags?: Tag[];
    status?: string;
  }) {
    super();
    this.id = data.id;
    this.category = data.category;
    this.name = data.name;
    this.photoUrls = data.photoUrls;
    this.tags = data.tags ?? [];
    this.status = data.status ?? "available";
  }

  getDisplayObj() {
    return { name: this.name, id: this.id } as PetsNameId;
  }

  toJSON(): object {
    return {
      id: this.id,
      category: this.category,
      name: this.name,
      photoUrls: this.photoUrls,
      tags: this.tags,
      status: this.status,
    };
  }
}
