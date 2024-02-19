import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class WatchService{

    private progressValueSubject = new BehaviorSubject<number>(0);

    getProgressValue() {
      return this.progressValueSubject.asObservable();
    }
  
    setProgressValue(value: number) {
      this.progressValueSubject.next(value);
    }


}