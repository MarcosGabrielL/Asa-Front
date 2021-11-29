import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetails } from './movie.model';
import { Genre } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

    
    GetDetails(id: String): Observable<MovieDetails[]>{
        var api_key = "249f222afb1002186f4d88b2b5418b55";
        var requestURL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=release_dates,credits,videos&language=pt-BR";
        return this.http.get<MovieDetails[]>(requestURL)
    }
}
