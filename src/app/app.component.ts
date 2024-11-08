import { Component, inject, OnInit } from '@angular/core';
import { FirestoreService } from './core/service/firestore.service';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './shared/component/head/head.component';
import { FootComponent } from './shared/component/foot/foot.component';
import { Producto } from './core/interfaz/producto';
import { fun } from './core/functions/fun';
const DATOS='productos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[RouterOutlet, HeadComponent, FootComponent]
})
export class AppComponent implements OnInit{
  private fire=inject(FirestoreService);
  public producto:Producto[]=[];
  ngOnInit():void{
    this.producto=fun.getProduct();
    if(this.producto.length==0){
      this.fire.getProductos()
      .then(dato=>{
        let aux:Producto;
        dato.forEach((d:any)=>{
          aux=d.data() as Producto;
          aux.id=d.id;
          this.producto.push(aux);
        });
        fun.setProduct(this.producto);
        location.reload();
      })
      .catch(error=>console.error(error));
    }
  }
}