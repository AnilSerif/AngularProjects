import { NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../../Services/MovieService';
import { register } from 'swiper/element';
import Swiper from 'swiper';
register();

@Component({
  selector: 'app-movielists',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './movielists.component.html',
  styleUrl: './movielists.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class MovielistsComponent {
movieService = inject(MovieService);
Movies = this.movieService.MovieSignal;








}