import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IHeaders } from "../Interfaces/IHeaders";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn:"root"
})

export class headerService{

DataUrl="http://localhost:3000";
private http = inject(HttpClient);
private Headers$ = this.http.get<IHeaders[]>(this.DataUrl + '/headers');
HeaderSignal = toSignal(this.Headers$,{initialValue:[] as IHeaders[]});


} 