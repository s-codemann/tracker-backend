import { rowInterface } from "./row.interface";
import { fieldInterface } from "./field.interface";
import { Field } from "./field.class";
export class Row implements rowInterface{
    
    fields:Field[]

    constructor(fields:Field[]){
       this.fields = fields
    }
}