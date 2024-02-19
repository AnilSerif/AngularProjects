import { Component, OnInit } from '@angular/core';
import { Guides } from 'src/app/Interface/guides';
import { GuidesService } from 'src/app/Services/guides.service';

@Component({
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css'],
  providers:[GuidesService]
})
export class GuideComponent implements OnInit {

  constructor(private guidesService:GuidesService){}
  guides:Guides[];

  ngOnInit(){
    this.guidesService.getGuides().subscribe(data=>{
      this.guides = data;
    })  
  }

}
