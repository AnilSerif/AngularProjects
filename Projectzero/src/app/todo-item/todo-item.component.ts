import { Component } from '@angular/core';

import { Model } from './model';

@Component({
  selector: 'TodoItem',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  displayAll:boolean = false;

  constructor() { }

  model = new Model();

  AddItem(Input:string){
  
    if(Input!=""){
      this.model.items.push({description:Input , action:false});
    }else{alert("Ekleme Yapmadınız..")}
  }

  getName(){
    return this.model.name;
  }


  getItems(){
   if(this.displayAll){
    return this.model.items;
   }
    return this.model.items.filter(items => !items.action);
  }





}
