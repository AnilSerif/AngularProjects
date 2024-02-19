import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lists } from '../Interface/lists';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  path="http://localhost:3000/Lists";

  constructor(private http:HttpClient) { }

  getList():Observable<Lists[]>{
    return this.http.get<Lists[]>(this.path);
    
  }


}
