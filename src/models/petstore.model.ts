import moment from "moment";
import { ModelBase } from "../base";
import { format, getFormat } from "../format";
import { property } from "../property";
import { config } from "../config";

 namespace Model {
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

    @config({
        apiBase: "https://petstore.swagger.io/v2/pet",
    })
    export class Pets extends ModelBase<number> {
        getId(): number {
            return this.id;
        }


        id: number;

        @property({
            type: 'number',
            required: true
        })
        category?: Category;

        name?: string;
        photoUrls?: string[];
        tags?: Tag[];
        status?: string;

        @format("MMMM Do YYYY")
        dob?: Date;

        @format("YYYY")
        anDate?: Date;

        get formatedAnDate() {
            return moment(this.anDate).format(getFormat(this, "anDate"));
        }

        get formatedDOB() {
            return moment(this.dob).format(getFormat(this, "dob"));
        }

        constructor(data: {
            id: number;
            category?: Category;
            name?: string;
            photoUrls?: string[];
            tags?: Tag[];
            status?: string;
            anDate?: Date;
            dob?: Date;
        }) {
            super();
            this.id = data.id;
            this.category = data.category;
            this.name = data.name;
            this.photoUrls = data.photoUrls;
            this.tags = data.tags ?? [];
            this.status = data.status ?? "available";
            this.anDate = data.anDate;
            this.dob = data.dob;
        }

        getDisplayObj() {
            return {name: this.name, id: this.id} as PetsNameId;
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


}