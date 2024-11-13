import { Producto } from "../interfaz/producto";

const DATOS="productos";
const USER="user";
const ORDEN="ordenDeCompra";
export class fun{
    static isId(datos:Producto[],id:string):number{
        for(let i=0;i<datos.length;i++){
            if(datos[i].id==id){
                return i;
            }
        }
        return -1;
    }
    static isLoggin():boolean{
        let user:any = this.getUser();
        if (user){
            return true;
        }else {
            location.pathname='/auth/login';
            return false;
        }
    }
    static getProduct():Producto[]{
        return JSON.parse(localStorage.getItem(DATOS)as string)||[];
    }
    static setProduct(producto:Producto[]){
        return localStorage.setItem(DATOS,JSON.stringify(producto));
    }
    static getUser():any{
        return JSON.parse(sessionStorage.getItem(USER)as string);
    }
    static getOrden():Producto[]{
        return JSON.parse(localStorage.getItem(ORDEN)as string)||[];
    }
    static setOrden(orden:Producto[]){
        return localStorage.setItem(ORDEN,JSON.stringify(orden));
    }
}