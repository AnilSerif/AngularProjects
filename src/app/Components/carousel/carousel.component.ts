import { Component,OnInit } from '@angular/core';
import {register} from 'swiper/element/bundle';
register();
import { Router } from '@angular/router';
import { Sliders } from 'src/app/Interface/sliders';
import { SlidersService } from 'src/app/Services/sliders.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[SlidersService]
})
export class CarouselComponent implements OnInit{
  constructor(private router: Router,
    private sliderService:SlidersService) {}

    sliders: Sliders[];

  RegisterPage(){
    this.router.navigate(['register']);
  }


 ngOnInit(){
   this.sliderService.getSliders().subscribe(data=>{
    this.sliders = data
   });
 }





}

 

