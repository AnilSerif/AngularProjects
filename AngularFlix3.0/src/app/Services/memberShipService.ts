import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IMembers } from "../Interfaces/IMember";
import { toSignal } from '@angular/core/rxjs-interop';


@Injectable({
    providedIn:'root'
})
export class memberShipService{

    DataUrl='http://localhost:3000';
    private http = inject(HttpClient);
    private MemberShip$ = this.http.get<IMembers[]>(this.DataUrl + '/MemberShipPackages')
    MembershipSignal = toSignal(this.MemberShip$,{initialValue:[] as IMembers[]});

   


}