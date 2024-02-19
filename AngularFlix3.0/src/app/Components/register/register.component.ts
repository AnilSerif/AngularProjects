import { Component, inject } from '@angular/core';
import { memberShipService } from '../../Services/memberShipService';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,Validators} from '@angular/forms';
import { IUsers } from '../../Interfaces/IUsers';
import { DataService } from '../../Services/DataService';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgFor,RouterLink,LoginComponent,NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private MemberService = inject(memberShipService)
  memberships = this.MemberService.MembershipSignal;
  showAlternateContent = false;
  private fb = inject(FormBuilder);
  private DataService = inject(DataService);
  private route = inject(Router);
  toggleContent(){
    this.showAlternateContent = !this.showAlternateContent;
  }

  userAddForm:FormGroup;
  serAddForm:FormGroup;


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
  const userData: IUsers = this.userAddForm.value;

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

ngOnInit(): void {
 this.createUserAddForm();

    
}

  


}