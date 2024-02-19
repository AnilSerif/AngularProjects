import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertifyService } from '../../Services/AlertifyService';
import { memberShipService } from '../../Services/memberShipService';
import { DataService } from '../../Services/DataService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,MainComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private alertify = inject(AlertifyService);
  private MemberShipService = inject(memberShipService);
  private fb = inject(FormBuilder);
  private route = inject(Router);
  public loginForm:FormGroup;
  private DataService = inject(DataService);
  
  
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const userCredentials = this.loginForm.value;

      this.DataService.login(userCredentials).subscribe(
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
