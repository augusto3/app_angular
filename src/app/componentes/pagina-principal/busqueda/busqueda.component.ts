import { Component, inject, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/interfaz/producto';
import { VistaComponent } from '../vista/vista.component'
import { NgFor } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { fun } from 'src/app/core/functions/fun';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  standalone:true,
  imports:[NgFor,VistaComponent]
})
export class BusquedaComponent implements OnInit{
  public search:string="";
  public producto:Producto[]=[];
  public ruta= inject(ActivatedRoute);
  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params=>{
      this.search=params['q'];
      this.searchTitle();
      })
  }
  searchTitle(){
    let aux:Producto[]=fun.getProduct();
    this.producto=[];
    aux.forEach(dato=>{
      if (dato.title.includes(this.search)){
        this.producto.push(dato);
      }
    })
  }
}