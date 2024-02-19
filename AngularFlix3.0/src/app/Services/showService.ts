import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { IShow } from "../Interfaces/IShow";
import { toSignal } from "@angular/core/rxjs-interop";


@Injectable({
    providedIn:'root'
})

export class showService{

    path="http://localhost:3000/Shows";
    http = inject(HttpClient);
    private Show$ = this.http.get<IShow[]>(this.path);
    ShowSignal = toSignal(this.Show$,{initialValue:[] as IShow[]});

    SelectedShowId = signal(0);

    setSelectedShowId(ShowId:number){
        this.SelectedShowId.set(ShowId)
    } 

    SelectedShow = computed(()=>this.ShowSignal().find(p=>p.ShowId===this.SelectedShowId()))








}