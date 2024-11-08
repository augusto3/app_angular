import { Component} from '@angular/core';
import { MasVistoComponent } from '../mas-visto/mas-visto.component';
import { RecomendadoComponent } from '../recomendado/recomendado.component';
import { ListarComponent } from '../listar/listar.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css'],
    standalone: true,
    imports: [NgIf, MasVistoComponent, RecomendadoComponent, ListarComponent]
})
export class PageComponent{
  mostrarMasVisto:boolean=true;
}