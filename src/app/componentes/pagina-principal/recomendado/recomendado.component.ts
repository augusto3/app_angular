import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaz/producto';
import { VistaComponent } from '../vista/vista.component';
import { fun } from 'src/app/core/functions/fun';
@Component({
  selector: 'app-recomendado',
  templateUrl: './recomendado.component.html',
  styleUrls: ['./recomendado.component.css'],
  standalone:true,
  imports:[VistaComponent]
})
export class RecomendadoComponent implements OnInit{
  public producto0!:Producto;
  public producto1!:Producto;
  public producto2!:Producto;
  public producto3!:Producto;
  public indice:number=0;
  public productos:Producto[]=[];
  public long:number=0;
  ngOnInit():void{
    let productos:Producto[]=fun.getProduct();
    if (productos.length!=0){
      this.recomendar(productos);
      this.long=this.productos.length;
      this.producto0=this.productos[this.indice];
      this.inizializar();
    }
  }
  recomendar(producto:Producto[]):void{
    let recomendados:number[]=[3,6,8,9,4,1,10];
    for (let num of recomendados){
        this.productos.push(producto[num]);
  }}
  inizializar():void{
    let aux:number;
    aux= fun.incrementar(this.indice,this.long);
    this.producto1=this.productos[aux];
    aux=fun.incrementar(aux,this.long);
    this.producto2=this.productos[aux];
    aux=fun.incrementar(aux,this.long);
    this.producto3=this.productos[aux];
  }
  sube():void{
    this.indice=fun.incrementar(this.indice,this.long);
    this.producto0=this.productos[this.indice];
    this.inizializar();
  }
  baja():void{
    this.indice=fun.decrementar(this.indice,this.long);
    this.producto0=this.productos[this.indice];
    this.inizializar();
  }
}