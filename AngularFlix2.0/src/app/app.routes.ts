import { Routes } from '@angular/router';


export const routes: Routes = [

    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:async()=>(await import("./Components/home/home.component")).HomeComponent},
    {path:'login',loadComponent:async()=>(await import("./Components/login/login.component")).LoginComponent},
    {path:'register',loadComponent:async()=>(await import("./Components/register/register.component")).RegisterComponent},
    {path:"main",loadComponent:async()=>(await import("./Components/main/main.component")).MainComponent},
    {path:"**",loadComponent:async()=>(await import("./Components/error/error.component")).ErrorComponent}



];
