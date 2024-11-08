import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaz/producto';
import { cartService } from 'src/app/core/service/cart.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  standalone:true,
  imports:[NgFor,NgIf]
})
export class CarritoComponent implements OnInit{
  public total:number=0;
  public orden:Producto[]=[];
  constructor(private cart :cartService){}
  ngOnInit(){
    this.cart.producto.subscribe(datos=>{
      this.orden= datos;
      this.totalCompra();
    })
  }
  totalCompra(){
    this.total=0;
    this.orden.forEach(dato=>{
      this.total+=dato.precio;
    });
  }
  path():boolean{
    return location.pathname=="/user/cart";
  }
  deleteClick(id:string){
    this.cart.deleteProduct(id);
    this.totalCompra();
  }
}