import { Component } from '@angular/core';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
