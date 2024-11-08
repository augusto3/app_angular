import { Routes } from "@angular/router"
import { InicioComponent } from "./inicio/inicio.component"
import { RegistrarseComponent } from "./registrarse/registrarse.component"
import { LayoutComponent } from "./layout/layout.component"

export const Auth:Routes=[
    {path:'',component:LayoutComponent,children:[
        {path:'', pathMatch:"full", redirectTo:'login'},
        {path:'login',component:InicioComponent},
        {path:'sign',component:RegistrarseComponent}
]}]