import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HomeGeralFilmesService } from '../home-geral-filmes/home-geral-filmes.service';
import { map } from 'rxjs/operators';
import { Result} from '../home-geral-filmes/result.model';
import { Root } from '../home-geral-filmes/root.model';

@Component({
  selector: 'app-home-acao-generos',
  templateUrl: './home-acao-generos.component.html',
  styleUrls: ['./home-acao-generos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeAcaoGenerosComponent {
  @Input()
     genero: string = "";
     theTradingString: string = "";
     result: Result[] = [];
     root: Root[] = [];
  
      m1 = true;
    
  constructor(private route: ActivatedRoute, private service: HomeGeralFilmesService, private router: Router) { this.subscribeRouteChange(); }

      subscribeRouteChange() {
          this.route.params.subscribe((params = {}) => {

              
             this.genero = params.genero;
              this.theTradingString = "";
            this.GetMoviesGenre();
            this.GetMoviesGenrePAge2();
            this.GetMoviesGenrePAge3();
          });
      }


  ngOnInit(): void {
    this.genero =this.route.snapshot.paramMap.get("genero")!;
       this.service.data = this.genero;
    this.GetMoviesGenre();
    //reload this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
    //GEt Movies by genre
    GetMoviesGenre(){
        this.service.GetTvGenre(this.genero).subscribe((resposta) => {
            this.root = resposta;
            //console.log(resposta); 
            const firstValue = Object.values(this.root)[1];
            this.result = Object.values(firstValue);
            //console.log(this.result);
           //this.showMovies();
             //this.showMovies();
            }); 
    }
    
    GetMoviesGenrePAge2(){
        this.service.GetTvGenrePAge2(this.genero).subscribe((resposta) => {
            this.root = resposta;
            //console.log(resposta); 
            const firstValue = Object.values(this.root)[1];
            this.result = this.result.concat(Object.values(firstValue));
            //console.log(this.resultLatest);
            this.showMovies();
             //this.showMovies();
            }); 
    }
    
    GetMoviesGenrePAge3(){
        this.service.GetTvGenrePAge3(this.genero).subscribe((resposta) => {
            this.root = resposta;
           // console.log(resposta); 
            const firstValue = Object.values(this.root)[1];
            this.result = this.result.concat(Object.values(firstValue));
            
            //console.log(this.resultLatest);
           this.showMovies();
             //this.showMovies();
            }); 
    }
    
    showMovies(){
            this.theTradingString = "";
            let cont = 0;
        this.result.forEach( (a) => {
                                this.theTradingString = this.theTradingString.concat
                            ("<li>"+
                    "<div class='movie'>"+
                       "<figure class='movie__figure'>"+
                            "<a  href='/serie/"+a.id+"\'>"+
                                "<img src='https://image.tmdb.org/t/p/w300"+a.poster_path+"' class='movie__poster'>"+
                            "</a>" +
                       " <figcaption><span class='movie__vote'>"+a.vote_average+"</span></figcaption>"+
                          "<h2 class='movie__title'>"+a.title+"</h2>"+
                      " </figure>"+
                    "</div>"+
                 "</li>");

                    
            
            cont = cont + 1;
        });
        
    }
}