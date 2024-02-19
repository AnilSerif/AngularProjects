import { NgFor } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { showService } from '../../../Services/showService';


@Component({
  selector: 'app-showdetail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './showdetail.component.html',
  styleUrl: './showdetail.component.css'
})
export class ShowdetailComponent {
ShowDetailService = inject(showService);
Shows = this.ShowDetailService.SelectedShow;

ShowTitle=computed(()=>{
  if(this.Shows()){
    return `${this.Shows()?.ShowId}`;
  }else{
    return 'Seçilen ürün bulunamadı.'
  }})

@Input() id="";


ngOnInit():void{
  if(this.id){
    this.ShowDetailService.setSelectedShowId(Number(this.id));
  }
 
}


}