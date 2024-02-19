import {CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { movieService } from '../../Service/movieservice';
import { DataService } from '../../Service/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';

register();


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})


export class MainComponent {
progressValue: number = 0;
private filmService = inject(movieService);
private DataService = inject (DataService);
public movies = toSignal(this.DataService.getMovies());
public headers = toSignal(this.DataService.getHeaders());
public shows = toSignal(this.DataService.getShows());

ngOnInit(){
this.filmService.getProgressValue().subscribe((value) => {
this.progressValue = value;
});
}

showProgress(){
    this.filmService.setProgressValue(25); 
}

hideProgress(){
    this.filmService.setProgressValue(0);
}
 












}


