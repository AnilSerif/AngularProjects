import { Injectable, inject } from "@angular/core";
import { IUsers } from "../Interfaces/IUsers";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class DataService{

path="http://localhost:3000/Users";
private http = inject(HttpClient)

postUsers(users:IUsers):Observable<IUsers>{
    return this.http.post<IUsers>(this.path,users)
}
  
getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this.path)
}
  
  login(userCredentials: { email: string, password: string }): Observable<any> {
    return this.getUsers().pipe(
      map(Users => {
        const user = Users.find(u => u.email === userCredentials.email && u.password === userCredentials.password);
        return user
          ? { success: true, user }
          : { success: false, error: 'Giriş bilgileri geçersiz' };
      })
    );
  }

} 