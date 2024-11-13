import { NgFor, NgIf} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { fun } from 'src/app/core/functions/fun';
import { Producto } from 'src/app/core/interfaz/producto';
@Component({
  selector: 'app-mas-visto',
  templateUrl: './mas-visto.component.html',
  styleUrls: ['./mas-visto.component.css'],
  standalone:true,
  imports:[NgFor],
})
export class MasVistoComponent implements OnInit{
  public masVendidos:Producto[]=[];
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
    }
    else{
      console.log("error")
    }
  }
}