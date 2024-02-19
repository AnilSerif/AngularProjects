import { Component, Input, computed, inject } from '@angular/core';
import { MovieService } from '../../../Services/MovieService';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-moviedetail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.css'
})
export class MoviedetailComponent {
 MoviesDetailService = inject(MovieService);
 Movies = this.MoviesDetailService.SelectedMovie;

 MovieTitle=computed(()=>{
  if(this.Movies()){
    return `${this.Movies()?.MovieId}`;
  }else{
    return 'Seçilen ürün bulunamadı.'
  }})

  @Input() id="";

ngOnInit():void{
  if(this.id){
    this.MoviesDetailService.setSelectedMovieId(Number(this.id));
  }
 
}










}
