import { Routes } from "@angular/router";
import { ProductoComponent } from "./producto/producto.component";
import { PrincipalComponent } from "./principal/principal.component";
import { PageComponent } from "./page/page.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";

export const rout:Routes=[
    {path:'', component:PrincipalComponent, children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:PageComponent},
        {path: 'product/:id', component: ProductoComponent },
        {path: 'search', component: BusquedaComponent },
    
    ]}
]