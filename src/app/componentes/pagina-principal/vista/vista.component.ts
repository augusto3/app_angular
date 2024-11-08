import { Component, Input, OnChanges} from '@angular/core';
import { Producto } from 'src/app/core/interfaz/producto';
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
  standalone:true,
})
export class VistaComponent implements OnChanges{
  @Input({required:true}) producto!:Producto;
  public title!:string;
  public images!:string[];
  public precio!:number;
  public id:string="";
  ngOnChanges():void{
      this.inicializar(this.producto);
  }
  inicializar(producto:Producto){
    if (producto!=undefined){
      this.id=producto.id;
      this.title=producto.title;
      this.images=producto.images;
      this.precio=producto.precio;
    }
  }
}