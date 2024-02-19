import { Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',loadComponent:async()=>(await import("./Components/home/home.component")).HomeComponent},
   {path:'main',loadComponent:async()=>(await import("./Components/main/main.component")).MainComponent},
   {path:'login',loadComponent:async()=>(await import("./Components/login/login.component")).LoginComponent},
   {path:'register',loadComponent:async()=>((await import("./Components/register/register.component")).RegisterComponent)},
   {path:'movies',loadChildren:()=>import("./Components/movies/moviesRoute").then(r=>r.MoviesRoute)},
   {path:'shows',loadChildren:()=>import("./Components/shows/showRoutes").then(s=>s.ShowRoutes)},
   {path:'**',component:ErrorComponent}
];
