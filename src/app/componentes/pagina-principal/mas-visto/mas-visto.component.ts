import { NgIf } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { fun } from 'src/app/core/functions/fun';
import { Producto } from 'src/app/core/interfaz/producto';
@Component({
  selector: 'app-mas-visto',
  templateUrl: './mas-visto.component.html',
  styleUrls: ['./mas-visto.component.css'],
  standalone:true,
  imports:[],
})
export class MasVistoComponent implements OnInit{
  private masVendidos:Producto[]=[];
  public long:number=0;
  public indice:number=0;
  public imagen:string[]=[];
  public title!:string;
  public descripcion!:string;
  public precio!:number;
  public id:string='';
  ngOnInit():void{
    this.masVendidosV();
  }
  masVendidosV(){
    let productos:Producto[]=fun.getProduct();
    if (productos.length!=0){
      for (let i =0;i<=productos.length-1;i++){
        if (productos[i].masVendidos==true){
          this.masVendidos.push(productos[i]);
        }
      }
      this.long=this.masVendidos.length;
      this.inicializar();
    }
    else{
      console.log("error")
    }
  }
  inicializar(){
    this.id=this.masVendidos[this.indice].id;
    this.imagen=this.masVendidos[this.indice].images;
    this.title =this.masVendidos[this.indice].title;
    this.descripcion =this.masVendidos[this.indice].descripcion;
    this.precio =this.masVendidos[this.indice].precio;
  }
  incrementar(){
    this.indice = fun.incrementar(this.indice,this.long);
    this.inicializar();
  }
  decrementar(){
    this.indice =fun.decrementar(this.indice,this.long);
    this.inicializar();
  }
}