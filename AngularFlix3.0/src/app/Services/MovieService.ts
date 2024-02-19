import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { IMovie } from "../Interfaces/IMovie";
import { toSignal } from "@angular/core/rxjs-interop";




@Injectable({
    providedIn:"root"
})

export class MovieService{

    path="http://localhost:3000/Movies";
    http = inject(HttpClient);
    private Movie$ = this.http.get<IMovie[]>(this.path);
    MovieSignal = toSignal(this.Movie$,{initialValue:[] as IMovie[]});
   
    SelectedMovieId = signal(0);

    setSelectedMovieId(MovieId:number){
        this.SelectedMovieId.set(MovieId)
    }

    SelectedMovie = computed(()=>
        this.MovieSignal().find(p =>p.MovieId === this.SelectedMovieId())
    )
   




}