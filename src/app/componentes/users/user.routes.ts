import { Routes } from "@angular/router";
import { LayoutUserComponent } from "./layout-user/layout-user.component";
import { CarritoComponent } from "./carrito/carrito.component";

export const User:Routes=[
    {path:'',component:LayoutUserComponent,children:[
        {path:'', pathMatch:"full", redirectTo:'cart'},
        {path:'cart',component:CarritoComponent}
    ]}
]