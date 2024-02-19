import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/Interface/lists';
import { ListsService } from 'src/app/Services/lists.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[ListsService]
})
export class ListComponent implements OnInit{

  constructor(private listService:ListsService){}

  lists:Lists[];

  ngOnInit(){
    this.listService.getList().subscribe(data=>{
      this.lists = data
    });
  }

}
