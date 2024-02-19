import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgIf, NgOptimizedImage } from '@angular/common'
import { NgFor} from '@angular/common';
import { DataService } from '../../Service/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AlertifyService } from '../../Service/AlertifyService';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Validators } from '@angular/forms';
import { usersID } from '../../Interfaces/usersID';






@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HomeComponent,RouterLink,NgFor,LoginComponent,NgOptimizedImage,ReactiveFormsModule,NgIf,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{

private DataService = inject(DataService); 
public memberships = toSignal(this.DataService.GetMemberDetail())
private Alertfiy = inject(AlertifyService);
private fb = inject(FormBuilder);
private route = inject(Router);

showAlternateContent = false;

toggleContent():void{
this.showAlternateContent = !this.showAlternateContent;}
/*İlk Kısım Bitiş. */
/*Form Başlangıç */
userAddForm:FormGroup;


createUserAddForm(){
  this.userAddForm = this.fb.group({
    name:["",[Validators.required]],
    surname:["",[Validators.required]],
    email:["",[Validators.email]],
    cardnumber:["",[Validators.maxLength(11)]],
    ccv:["",[Validators.minLength(3)]],
    password:["",[Validators.maxLength(10)]]
  });
}

add(){if (this.userAddForm.valid) {
  const userData: usersID = this.userAddForm.value;

  this.DataService.postUsers(userData).subscribe(
    response => {
      console.log('Kayıt Başarılı', response);
      this.route.navigate(['/login']);
    },
    error => {
      console.error('Kayıt Başarısız', error);
    }
  );
}
}

/* Form Bitiş */
ngOnInit(): void {
 this.createUserAddForm();

    
}

















}