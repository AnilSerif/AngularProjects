import { Routes } from "@angular/router";
import { MovielistsComponent } from "./movielists/movielists.component";
import { MoviedetailComponent } from "./moviedetail/moviedetail.component";



export const MoviesRoute:Routes=[
    {path:'',component:MovielistsComponent},
    {path:':id',component:MoviedetailComponent}
]