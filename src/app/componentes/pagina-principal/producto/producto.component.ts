import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/core/interfaz/producto';
import { NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { fun } from 'src/app/core/functions/fun';
import { cartService } from 'src/app/core/service/cart.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  standalone:true,
  imports:[NgFor,FormsModule]
})
export class ProductoComponent {
  public title!:string;
  public images!:string[];
  public precio!:number;
  public descripcion!:string;
  public talla!:string;
  public colors!:string;
  public cantidad:number[]=[];
  public currentImage!:string;
  public image!:string;
  private productos:Producto[]=[];
  public indice:number=-1;
  public count:number=1;
  public orden:Producto[]=[];
  private route = inject(ActivatedRoute);
  constructor(private cart:cartService){}
  ngOnInit(){
    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.productos= fun.getProduct();
      this.indice = fun.isId(this.productos,id);
      if (this.indice>-1){
        this.inicializar(this.productos[this.indice]);
      }
      this.cart.producto.subscribe(dato=>{
        this.orden=dato;
        let i=fun.isId(this.orden,id);
        if (i>=0){
          this.count=this.orden[i].cantidad;
        }  
      })
    })
  }
  inicializar(producto:Producto){
    if (producto!=undefined){
      this.title=producto.title;
      this.images=producto.images;
      this.currentImage=this.images[0];
      this.precio=producto.precio;
      this.descripcion=producto.descripcion;
      this.talla=producto.talla;
      this.talla=this.talla.substring(6).toUpperCase();
      this.colors=producto.colors;
      this.colors=this.colors.substring(7);
      for (let indice=1; indice<=producto.cantidad;indice++){
        this.cantidad.push(indice);
      }
    }
  }
  changeImage(image: string) {
    this.image=this.currentImage;
    this.currentImage = image;
  }
  backImage(){
    this.currentImage = this.image;
  }
  back(){
    return window.history.go(-1);
  }
  addProducto(){
    if (fun.isLoggin()){
      this.cart.addNewProduct(this.productos[this.indice],this.count);
    }
  }
}