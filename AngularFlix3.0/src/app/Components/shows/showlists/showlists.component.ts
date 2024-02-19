import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { showService } from '../../../Services/showService';
import { register } from 'swiper/element';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
register();

@Component({
  selector: 'app-showlists',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './showlists.component.html',
  styleUrl: './showlists.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ShowlistsComponent {
  showService = inject(showService);
  Shows = this.showService.ShowSignal;


}
