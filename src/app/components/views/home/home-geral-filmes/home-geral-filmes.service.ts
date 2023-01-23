import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from './root.model';

@Injectable({
  providedIn: 'root'
})
export class HomeGeralFilmesService {

    API_KEY: string  = "249f222afb1002186f4d88b2b5418b55";
     API_SEARCH: string = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=pt-BR&query=`;
     IMAGE_PATH: string = "https://image.tmdb.org/t/p/w500";
     page: string = "1";
     API_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_video=true&page=`;
    API_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_KEY}&language=pt-BR&page=1&region=BR`
    API_URL_LATEST = `https://api.themoviedb.org/3/movie/latest?api_key=${this.API_KEY}&language=pt-BR`
    API_URL_TOPRATE = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
    API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`
    API_URL_NOWPLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1`
    API_URL_TRADING_TODAY = `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}&language=pt-BR`
    API_URL_tv: string = `https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_video=true&page=`;
    
    API_URL_UPCOMING_tv = `https://api.themoviedb.org/3/tv/upcoming?api_key=${this.API_KEY}&language=pt-BR&page=1&region=BR`
    API_URL_LATEST_tv = `https://api.themoviedb.org/3/tv/latest?api_key=${this.API_KEY}&language=pt-BR`
    API_URL_TOPRATE_tv = `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
    API_URL_POPULAR_tv = `https://api.themoviedb.org/3/tv/popular?api_key=${this.API_KEY}&language=en-US&page=1`
    API_URL_NOWPLAYING_tv = `https://api.themoviedb.org/3/tv/now_playing?api_key=${this.API_KEY}&language=en-US&page=1`
    API_URL_TRADING_TODAY_tv = `https://api.themoviedb.org/3/trending/tv/day?api_key=${this.API_KEY}&language=pt-BR`
    
    GENRE_ID: string = "";
    API_URL_MOVIEGENRE = `https://api.themoviedb.org/3/genre/${this.GENRE_ID}/movies?api_key=${this.API_KEY}&language=pt-BR`
   // API_URL_MOVIEGENRE = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&with_genres=${this.GENRE_ID}`
  
  filterdata: any;
    
constructor(private http: HttpClient) {}

    Get20Popular(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL.concat(this.page))
 
    }

    //GET/movie/upcoming
    GetUpcoming(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_UPCOMING)
 
    }
        //GET/movie/latest
  GetLatest(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_LATEST)
 
    }
        //GET/movie/trading
  GetTrandingToday(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_TRADING_TODAY)
 
    }
    
    Get20PopularTv(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_tv.concat(this.page))
 
    }

    //GET/movie/upcoming
    GetUpcomingTv(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_UPCOMING_tv)
 
    }
        //GET/movie/latest
  GetLatestTv(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_LATEST_tv)
 
    }
        //GET/movie/trading
  GetTrandingTodayTv(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_TRADING_TODAY_tv)
 
    }
    
         //GET/movie/trading
  GetTrandingTodayTvPAge2(): Observable<Root[]>{
        return this.http.get<Root[]>(this.API_URL_TRADING_TODAY_tv+'&page=2')
 
    }

    //GET genre/movie/list
    GetMoviesGenre(genre: string): Observable<Root[]>{
     let URL = `https://api.themoviedb.org/3/genre/${genre}/movies?api_key=${this.API_KEY}&language=pt-BR`
   
        return this.http.get<Root[]>(URL)
 
    }
    
    GetMoviesGenrePAge2(genre: string): Observable<Root[]>{
     let URL = `https://api.themoviedb.org/3/genre/${genre}/movies?api_key=${this.API_KEY}&language=pt-BR&page=2`
   
        return this.http.get<Root[]>(URL)
 
    }
    
   GetMoviesGenrePAge3(genre: string): Observable<Root[]>{
     let URL = `https://api.themoviedb.org/3/genre/${genre}/movies?api_key=${this.API_KEY}&language=pt-BR&page=3`
   
        return this.http.get<Root[]>(URL)
 
    }

 //GET genre/movie/list
    GetTvGenre(genre: string): Observable<Root[]>{
     let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_video=true&with_genres=${genre}`
        return this.http.get<Root[]>(URL)
 
    }
    
    GetTvGenrePAge2(genre: string): Observable<Root[]>{
     let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_video=true&with_genres=${genre}&page=2`
        return this.http.get<Root[]>(URL)
 
    }
    
   GetTvGenrePAge3(genre: string): Observable<Root[]>{
     let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${this.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_video=true&with_genres=${genre}&page=3`
       return this.http.get<Root[]>(URL)
 
    }
   

    get data(): any{
    return this.filterdata;
  }

  set data(val: any){
    this.filterdata = val;
    console.log(this.filterdata);
  }

}
