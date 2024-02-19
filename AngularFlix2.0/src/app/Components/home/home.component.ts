import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import {RouterLink,Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RegisterComponent,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




}
