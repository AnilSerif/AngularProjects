import { Injectable } from '@angular/core';
import { Sliders } from '../Interface/sliders';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {
  path="http://localhost:3000/Sliders"
  constructor(private http:HttpClient) { }

  getSliders():Observable<Sliders[]>{
    return this.http.get<Sliders[]>(this.path);
  }


}
