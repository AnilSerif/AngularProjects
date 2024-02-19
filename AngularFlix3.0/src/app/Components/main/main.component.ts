import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { headerService } from '../../Services/headerService';
import { NgFor } from '@angular/common';
import { WatchService } from '../../Services/watchService';
import { RouterLink } from '@angular/router';
import { MovielistsComponent } from '../movies/movielists/movielists.component';
import { MoviedetailComponent } from '../movies/moviedetail/moviedetail.component';
import { ShowdetailComponent } from '../shows/showdetail/showdetail.component';
import { ShowlistsComponent } from '../shows/showlists/showlists.component';
register();


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor,RouterLink,MovielistsComponent,MoviedetailComponent,ShowlistsComponent,ShowdetailComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MainComponent {

  private HeaderService = inject(headerService);
  headers = this.HeaderService.HeaderSignal;
  progressValue: number = 0;
  private watchService = inject(WatchService);

 

  ngOnInit(){
    this.watchService.getProgressValue().subscribe((value) => {
      this.progressValue = value;});}
      showProgress(){this.watchService.setProgressValue(25);}
      hideProgress(){this.watchService.setProgressValue(0);}
  


}
