import { Component } from '@angular/core';
import { RegistrarseComponent } from '../registrarse/registrarse.component';
import { InicioComponent } from '../inicio/inicio.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone:true,
  imports:[RegistrarseComponent,InicioComponent, RouterOutlet, RouterLink,RouterLinkActive]
})
export class LayoutComponent{
  loginActive():boolean{
    return window.location.pathname == '/auth/login';
  }
  signActive():boolean{
    return window.location.pathname == '/auth/sign';}
}
