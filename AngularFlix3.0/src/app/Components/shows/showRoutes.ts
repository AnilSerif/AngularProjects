import { Routes } from "@angular/router";
import { ShowlistsComponent } from "./showlists/showlists.component";
import { ShowdetailComponent } from "./showdetail/showdetail.component";

export const ShowRoutes:Routes=[
    {path:'',component:ShowlistsComponent},
    {path:':id',component:ShowdetailComponent}
]