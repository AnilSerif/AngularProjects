import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  randomPhotoUrl!: string;
  photoUrls: string[] = [
    'https://files.ekmcdn.com/allwallpapers/images/avengers-endgame-from-the-ashes-61x91-5cm-movie-poster-31603-1-p.jpg?v=599d4741-9423-4652-b292-e55e0354b409',
    'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png',
    'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f676b5811234c887ca62_top%20gun%20maverick-min.png',
   
  ];

  Password:boolean=false;
  ShowPassword(){
    this.Password = !this.Password;
  }

  ngOnInit(): void {
    this.showRandomPhoto();
    setInterval(() => {
      this.showRandomPhoto();
    }, 4000);
  }

  showRandomPhoto(): void {
    const randomIndex = Math.floor(Math.random() * this.photoUrls.length);
    this.randomPhotoUrl = this.photoUrls[randomIndex];
  }


}
