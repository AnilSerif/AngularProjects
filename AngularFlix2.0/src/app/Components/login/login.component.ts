import { Component, Inject, inject } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../Service/data.service';
import { AlertifyService } from '../../Service/AlertifyService';
import { Router } from '@angular/router';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent,FormsModule,ReactiveFormsModule,MainComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private dataService = inject(DataService);
  private alertify = inject(AlertifyService);
  private fb = inject(FormBuilder);
  private route = inject(Router);

  public loginForm:FormGroup;
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const userCredentials = this.loginForm.value;

      this.dataService.login(userCredentials).subscribe(
        (response) => {
          if (response.success) {
            console.log('Giriş Başarılı', response);
            this.alertify.success('Merhaba ' + response.user.name)
            
            this.route.navigate(['/main']);
          } else {
            console.error('Giriş Başarısız', response.error);
            
          }
        },
        (error) => {
          console.error('Giriş Başarısız', error);
          
        }
      );
    }
  }

  ngOnInit(): void {
    this.createLoginForm();
  }














}
