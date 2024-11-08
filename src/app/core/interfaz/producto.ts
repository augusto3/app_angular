import {Talla,Colors } from "./enum";

export interface Producto{
    id:string,
    title:string,
    images:string[],
    precio:number,
    descripcion:string,
    talla:Talla,
    colors:Colors,
    cantidad:number,
    masVendidos:boolean
}