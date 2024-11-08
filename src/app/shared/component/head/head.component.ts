import { NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { FormGroup,FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { CarritoComponent } from 'src/app/componentes/users/carrito/carrito.component';
import { cartService } from 'src/app/core/service/cart.service';
import { FirebaseAuth } from 'src/app/core/service/firebaseAuth.service';
const USER = 'user';
@Component({
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  standalone:true,
  imports:[NgIf, RouterLink,RouterLinkActive, FormsModule, CarritoComponent]
})
export class HeadComponent implements OnInit{
  public formCarga!:FormGroup;
  public titulo:string ="FreeShop";
  public mostrarBarra:boolean=false;
  public islogged:boolean=false;
  public total:number=0;
  public q:string='';
  public cartEvent:boolean=false;
  private ruta=inject(Router);
  private auth = inject(FirebaseAuth);
  private cart = inject(cartService);
  ngOnInit(){
    this.isLoggin();
    if(this.islogged){
      this.cart.producto.subscribe(dato=>{
      this.total=dato.length;
    })}
  }
  path():boolean{
    return location.pathname!="/user/cart";
  }
 
  redirectToCart(){
    if(this.total!=0){
      location.pathname='/user/cart'
    }
  }
  cerrarSession(){
    this.auth.signOut();
    this.isLoggin();
    location.reload();
  }
  isLoggin():void{
    let user = JSON.parse(sessionStorage.getItem(USER) as string);
    if (user){
      this.islogged=true;
    }if(!user){
      this.islogged=false;
    }
  }
  cambio(){
    this.mostrarBarra=!this.mostrarBarra;
  }
  search(){
    this.ruta.navigate(['/search'],{queryParams:{q:this.q}});
  }
}