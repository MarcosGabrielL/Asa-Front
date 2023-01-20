import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result} from './result.model';
import { Root } from './root.model';

@Injectable({
  providedIn: 'root'
})
export class MovieBuscaService {

     API_KEY: string  = "249f222afb1002186f4d88b2b5418b55";
     API_SEARCH: string = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=pt-BR&query=`;
     IMAGE_PATH: string = "https://image.tmdb.org/t/p/w500";
     page: string = "1";
     API_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_video=true&page=`;
    
  constructor(private http: HttpClient) { }

    // initially get the most popular movies list's first page
    Get20Popular(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL.concat(this.page))
 
    }
    
    //get movies list by name
    GetMovie(query: string): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_SEARCH.concat(query))
    }

    
}
