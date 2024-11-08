import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-principal',
  template: '<router-outlet></router-outlet>',
  standalone:true,
  imports: [RouterModule]
})
export class PrincipalComponent {

}
