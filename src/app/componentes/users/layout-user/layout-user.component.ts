import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  styleUrls:['./layout-user.component.css'],
  templateUrl: './layout-user.component.html',
  standalone:true,
  imports:[RouterModule]
})
export class LayoutUserComponent {
}
