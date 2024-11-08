import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone:true,
  imports:[ RouterOutlet, RouterLink,RouterLinkActive]
})
export class LayoutComponent{
  loginActive():boolean{
    return window.location.pathname == '/auth/login';
  }
  signActive():boolean{
    return window.location.pathname == '/auth/sign';}
}
