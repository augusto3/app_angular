import { Injectable } from "@angular/core";
import { Producto } from "../interfaz/producto";
import { BehaviorSubject} from "rxjs";
import { fun } from "src/app/core/functions/fun"
const ORDEN='ordenDeCompra';
@Injectable({
    providedIn:'root'
})
export class cartService{
    private cartServ:Producto[]=[];
    private _orden!:BehaviorSubject<Producto[]>;
    constructor(){
        this.cartServ=fun.getOrden();
        this._orden= new BehaviorSubject<Producto[]>(this.cartServ);
    }
    get producto(){
        return this._orden.asObservable();
    }
    addNewProduct(producto:Producto,count:number){
        let index=fun.isId(this.cartServ,producto.id);
        if (index>-1){
            this.cartServ[index].precio=producto.precio/this.cartServ[index].cantidad;
            this.cartServ[index].cantidad=count;
            this.cartServ[index].precio=producto.precio*count;
            fun.setOrden(this.cartServ);
        }else{
            producto.cantidad=count;
            producto.precio=producto.precio*count;
            this.cartServ.push(producto);
            fun.setOrden(this.cartServ);
        }
        this._orden.next(this.cartServ);
    }
    deleteProduct(id:string){
        let index=fun.isId(this.cartServ,id);
        this.cartServ.splice(index,1);
        fun.setOrden(this.cartServ);
        this._orden.next(this.cartServ);
    }
}