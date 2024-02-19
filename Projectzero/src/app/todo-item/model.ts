import { TodoItem } from "./todo-item";

export class Model{
    name:string;
    items:TodoItem[]

    constructor(){
        this.name="Ahmet";
        this.items=[
        {description:"Kahvaltı", action:true},
        {description:"Spor",action:true},
        {description:"Alışveriş",action:true},
        {description:"Yürüyüs",action:true}
      ];
    }

}