import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/core/interfaz/producto';
import { VistaComponent } from '../vista/vista.component';
import { fun } from 'src/app/core/functions/fun';
import { NgFor } from '@angular/common';
import { ProductoComponent } from '../producto/producto.component';
@Component({
  selector: 'app-recomendado',
  templateUrl: './recomendado.component.html',
  styleUrls: ['./recomendado.component.css'],
  standalone:true,
  imports:[VistaComponent,NgFor,ProductoComponent]
})
export class RecomendadoComponent implements OnInit{
  @ViewChild('slider') slider!:ElementRef<HTMLDivElement>;
  public indice:number=0;
  public productos:Producto[]=[];
  public long:number=0;
  ngOnInit():void{
    let productos:Producto[]=fun.getProduct();
    if (productos.length!=0){
      this.recomendar(productos);
      this.long=this.productos.length;
    }
  }
  recomendar(producto:Producto[]):void{
    let recomendados:number[]=[3,6,8,9,4,1,10];
    for (let num of recomendados){
        this.productos.push(producto[num]);
    }
  }
}