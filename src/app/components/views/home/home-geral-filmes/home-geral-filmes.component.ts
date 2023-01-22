import { OwlOptions,CarouselModule } from 'ngx-owl-carousel-o';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeGeralFilmesService } from './home-geral-filmes.service';
import { map } from 'rxjs/operators';
import { Result} from './result.model';
import { Root } from './root.model';

@Component({
  selector: 'app-home-geral-filmes',
  templateUrl: './home-geral-filmes.component.html',
  styleUrls: ['./home-geral-filmes.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeGeralFilmesComponent implements OnInit {

    result: Result[] = [];
    resultUpcoming: Result[] = [];
    resultLatest: Result[] = [];
    resultTrading: Result[] = [];
    root: Root[] = [];
    rootUpComing: Root[] = [];
    rootLatest: Root[] = [];
    rootTrading: Root[] = [];
    nome1: string="";    
    thePrincipalString: string="";
    thePrincipalString1: string="";
    thePrincipalString2: string="";
    thePrincipalString3: string="";
    thePrincipalString4: string="";
    theUpcomingString: string="";
    theTradingString: string="";
  constructor(private service: HomeGeralFilmesService) { }

  ngOnInit(): void {
    this.Get20Popular();
    this.GetUpcoming();
    //this.GetLatest();
    this.GetTrandingToday();
  }

    //GEt Trading today
    GetTrandingToday(){
        this.service.GetTrandingToday().subscribe((resposta) => {
            this.rootTrading = resposta;
            //console.log(resposta); 
            const firstValue = Object.values(this.rootTrading)[1];
            this.resultTrading = Object.values(firstValue);
            //console.log(this.resultLatest);
            this.showTrading();
            }); 
    }
    
    showTrading(){
            this.theTradingString = "";
            let cont = 0;
        this.resultTrading.forEach( (a) => {
                    if(cont ==0){
                        }else{
                                this.theTradingString = this.theTradingString.concat
                            ("<li>"+
                    "<div class='movie'>"+
                       "<figure class='movie__figure'>"+
                            "<a  href='/filme/"+a.id+"\'>"+
                                "<img src='https://image.tmdb.org/t/p/w300"+a.poster_path+"' class='movie__poster'>"+
                            "</a>" +
                       " <figcaption><span class='movie__vote'>"+a.vote_average+"</span></figcaption>"+
                          "<h2 class='movie__title'>"+a.title+"</h2>"+
                      " </figure>"+
                    "</div>"+
                 "</li>");

                    }
            
            cont = cont + 1;
        });
        
    }

    //Get LAtest
    GetLatest(){
        this.service.GetLatest().subscribe((resposta) => {
            this.rootLatest = resposta;
            //console.log(resposta); 
            const firstValue = Object.values(this.rootLatest)[1];
            this.resultLatest = Object.values(firstValue);
            //console.log(this.resultLatest);
            });    
    }

    //UPcoming movies
    GetUpcoming(){
        this.service.GetUpcoming().subscribe((resposta) => {
            this.rootUpComing = resposta;
            //console.log(this.rootUpComing); 
            const firstValue = Object.values(this.rootUpComing)[2];
            this.resultUpcoming = Object.values(firstValue);
            //console.log(this.resultUpcoming);
            this.showUpcoming();
            });     
    }

    showUpcoming(){
            this.theUpcomingString = "";
            let cont = 0;
        this.resultUpcoming.forEach( (a) => {
            if(cont >= 5){}else{
                        this.theUpcomingString = this.theUpcomingString.concat
                    ("<li>"+
            "<div class='movie'>"+
               "<figure class='movie__figure'>"+
                    "<a  href='/filme/"+a.id+"\'>"+
                        "<img src='https://image.tmdb.org/t/p/w300"+a.poster_path+"' class='movie__poster'>"+
                    "</a>" +
               " <figcaption><span class='movie__vote'>"+a.vote_average+"</span></figcaption>"+
                  "<h2 class='movie__title'>"+a.title+"</h2>"+
              " </figure>"+
            "</div>"+
         "</li>");
                
            }
            cont = cont + 1;
        });
        
    }

    // initially get the most popular movies list's first page
    Get20Popular(){
        this.service.Get20Popular().subscribe((resposta) => {
            this.root = resposta;
            //console.log(this.root); 
            const firstValue = Object.values(this.root)[1];
            this.result = Object.values(firstValue);
            this.showMovies();

            });     
    }

    showMovies(){
            this.thePrincipalString = "";
            let cont = 0;
        this.result.forEach( (a) => {
            if(cont >= 5){}else{
                switch (cont) {
                    case 0:
                        this.thePrincipalString = this.thePrincipalString.concat
                    (
                    "<div class='slide-image slider-link prev' >"+
                           "<a href='/filme/"+a.id+"\'>"+
                          "<img href='/filme/"+a.id+"' src='https://image.tmdb.org/t/p/w300"+a.poster_path+"'><div class='overlay'></div></div>"+
                          "</a>" +
                        "<div class='slide-content'>"+
                                "<div class='slide-date'>"+a.title+"</div>"+
                                "<div class='slide-title'>"+a.release_date.substring(0, 4)+"</div>"+
                                "<div class='slide-text'>"+a.overview+"</div>"+
                                "<a  href='/filme/"+a.id+"\'><div class='slide-more'>READ MORE</div></a>"+
                        "</div>	"+
                    "</div>");
                        break;
                    case 1:
                       this.thePrincipalString1 = this.thePrincipalString1.concat
                    (
                    "<div class='slide-image slider-link prev' >"+
                           "<a href='/filme/"+a.id+"\'>"+
                          "<img href='/filme/"+a.id+"' src='https://image.tmdb.org/t/p/w300"+a.poster_path+"'><div class='overlay'></div></div>"+
                          "</a>" +
                         "<div class='slide-content'>"+
                                "<div class='slide-date'>"+a.title+"</div>"+
                                "<div class='slide-title'>"+a.release_date.substring(0, 4)+"</div>"+
                                "<div class='slide-text'>"+a.overview+"</div>"+
                                "<a  href='/filme/"+a.id+"\'><div class='slide-more'>READ MORE</div></a>"+
                        "</div>	"+
                    "</div>");
                        break;
                    case 2:
                       this.thePrincipalString2 = this.thePrincipalString2.concat
                    (
                    "<div class='slide-image slider-link prev' >"+
                           "<a href='/filme/"+a.id+"\'>"+
                          "<img href='/filme/"+a.id+"' src='https://image.tmdb.org/t/p/w300"+a.poster_path+"'><div class='overlay'></div></div>"+
                          "</a>" +
                        "<div class='slide-content'>"+
                                "<div class='slide-date'>"+a.title+"</div>"+
                                "<div class='slide-title'>"+a.release_date.substring(0, 4)+"</div>"+
                                "<div class='slide-text'>"+a.overview+"</div>"+
                               "<a  href='/filme/"+a.id+"\'><div class='slide-more'>READ MORE</div></a>"+
                        "</div>	"+
                    "</div>");
                        break;
                    case 3:
                       this.thePrincipalString3 = this.thePrincipalString3.concat
                    (
                    "<div class='slide-image slider-link prev' >"+
                           "<a href='/filme/"+a.id+"\'>"+
                          "<img href='/filme/"+a.id+"' src='https://image.tmdb.org/t/p/w300"+a.poster_path+"'><div class='overlay'></div></div>"+
                          "</a>" +
                        "<div class='slide-content'>"+
                                "<div class='slide-date'>"+a.title+"</div>"+
                                "<div class='slide-title'>"+a.release_date.substring(0, 4)+"</div>"+
                                "<div class='slide-text'>"+a.overview+"</div>"+
                                "<a  href='/filme/"+a.id+"\'><div class='slide-more'>READ MORE</div></a>"+
                        "</div>	"+
                    "</div>");
                        break;
                    case 4:
                       this.thePrincipalString4 = this.thePrincipalString4.concat
                    (
                    "<div class='slide-image slider-link prev' >"+
                           "<a href='/filme/"+a.id+"\'>"+
                          "<img href='/filme/"+a.id+"' src='https://image.tmdb.org/t/p/w300"+a.poster_path+"'><div class='overlay'></div></div>"+
                          "</a>" +
                        "<div class='slide-content'>"+
                                "<div class='slide-date'>"+a.title+"</div>"+
                                "<div class='slide-title'>"+a.release_date.substring(0, 4)+"</div>"+
                                "<div class='slide-text'>"+a.overview+"</div>"+
                              "<a  href='/filme/"+a.id+"\'><div class='slide-more'>READ MORE</div></a>"+
                        "</div>	"+
                    "</div>");
                        break;
                    default:

                }
                
            }
            cont = cont + 1;
        });
        
    }
  
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
    
    
}
