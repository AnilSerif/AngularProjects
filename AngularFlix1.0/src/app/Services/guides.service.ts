import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guides } from '../Interface/guides';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuidesService {
  path="http://localhost:3000/Guides";
  constructor(private http:HttpClient) { }


  getGuides():Observable<Guides[]>{
    return this.http.get<Guides[]>(this.path);
  }


}
