import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaz/producto';
import { VistaComponent } from '../vista/vista.component';
import { NgFor } from '@angular/common';
import { fun } from 'src/app/core/functions/fun';
const itemForPage:number=6;
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  standalone:true,
  imports:[VistaComponent,NgFor],
})
export class ListarComponent implements OnInit{
  @Input() listar:boolean=false;
  public titulo:string="todos los productos";
  public dato:Producto[]=[];
  public productos:Producto[]=[];
  public totalItem!:number;
  public currentPage = 1;
  public maxPage!:Number;
  public index:number=0;
  ngOnInit():void{
    this.productos=fun.getProduct();
    if (this.productos.length!=0){
      this.totalItem=this.productos.length;
      this.maxPage=Math.ceil(this.totalItem/itemForPage);
      this.initializePginated();
      this.index=this.index+itemForPage;
    }
  }
  initializePginated(){
    this.dato=this.productos.slice(this.index,itemForPage*this.currentPage);
  }
  left(){
    this.currentPage--;
    console.log('indexLeft:',(this.currentPage-1)*itemForPage);
    this.index=(this.currentPage-1)*itemForPage;
    this.initializePginated();
  }
  right(){
    this.index=this.currentPage*itemForPage;
    this.currentPage++;
    this.initializePginated();
  }
  disable0():boolean{
    return this.currentPage===1;
  }
  disableMax():boolean{
    return this.currentPage===this.maxPage;
  }
}