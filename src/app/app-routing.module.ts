import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { GuideComponent } from './Components/guide/guide.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ListComponent } from './Components/list/list.component';
const routes: Routes = [
  {path:'',redirectTo:"main-page", pathMatch:"full"},
  {path:'main-page', component: CarouselComponent},
  {path:'register',component:RegisterComponent},
  {path:'guide',component: GuideComponent},
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
