import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { ImemberDetails } from '../Interfaces/ImemberDetail';
import { Head, Observable, map, retry} from 'rxjs';
import { usersID } from '../Interfaces/usersID';
import {ImoviesData} from '../Interfaces/ImoviesData';
import {IshowsData } from '../Interfaces/IshowsData';
import { Headers } from '../Interfaces/headers';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private DataUrl = "http://localhost:3000/";
  private http = inject(HttpClient)


  GetMemberDetail():Observable<ImemberDetails[]>{
    return this.http.get<ImemberDetails[]>(this.DataUrl+'membershipPackages');
  }
  
 postUsers(users:usersID):Observable<usersID>{
  return this.http.post<usersID>(this.DataUrl+'users',users)
 }

getUsers():Observable<usersID[]>{
  return this.http.get<usersID[]>(this.DataUrl+'users')
}

login(userCredentials: { email: string, password: string }): Observable<any> {
  return this.getUsers().pipe(
    map(users => {
      const user = users.find(u => u.email === userCredentials.email && u.password === userCredentials.password);
      return user
        ? { success: true, user }
        : { success: false, error: 'Giriş bilgileri geçersiz' };
    })
  );
}
 
 
getMovies(): Observable<ImoviesData[]> {
  return this.http.get<ImoviesData[]>(this.DataUrl + 'moviesData');
} 

getShows(): Observable<IshowsData[]> {
  return this.http.get<IshowsData[]>(this.DataUrl + 'showsData');
}

getHeaders(): Observable<Headers[]> {
  return this.http.get<Headers[]>(this.DataUrl + 'headers');
}



}
