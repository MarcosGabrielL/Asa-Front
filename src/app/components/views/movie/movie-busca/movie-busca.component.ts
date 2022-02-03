import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieBuscaService } from './movie-busca.service';
import { map } from 'rxjs/operators';
import { Result} from './result.model';
import { Root } from './root.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-busca',
  templateUrl: './movie-busca.component.html',
  styleUrls: ['./movie-busca.component.css'],
  host: {'(document:submit)': 'onKeyUp($event)'},
  encapsulation: ViewEncapsulation.None,
})
export class MovieBuscaComponent implements OnInit {
    
    result: Result[] = [];
    root: Root[] = [];
    nome1: string="";    
    theHtmlString: string="";
  constructor(private service: MovieBuscaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
	if(null != this.route.snapshot.paramMap.get("id")){
	this.GetMovie(this.route.snapshot.paramMap.get("id")!)
	}else{
       this.Get20Popular();}
  }

    // initially get the most popular movies list's first page
    Get20Popular(){
        this.service.Get20Popular().subscribe((resposta) => {
            this.root = resposta;
            console.log(this.root); 
            const firstValue = Object.values(this.root)[1];
            this.result = Object.values(firstValue);
            this.showMovies();

            });     
    }

    //get root list by name
    GetMovie(name: string): void {
    this.service.GetMovie(name).subscribe((resposta) => {
      this.root = resposta;
            console.log(this.root); 
            const firstValue = Object.values(this.root)[1];
            this.result = Object.values(firstValue);
            this.showMovies();
            });
    }

    showMovies(){
            this.theHtmlString = "";
        this.result.forEach( (a) => {
            this.theHtmlString = this.theHtmlString.concat
                ("<li routerLink='filme/"+a.id+"\'>"+
            "<div routerLink='filme/"+a.id+"\' class='movie'>"+
               "<figure routerLink='filme/"+a.id+"\' class='movie__figure'>"+
                    "<a href='/filme/"+a.id+"\'>"+
                        "<img routerLink='filme/"+a.id+"\' src='https://image.tmdb.org/t/p/w300"+a.poster_path+"' class='movie__poster'>"+
                  "</a>" +
               " <figcaption><span class='movie__vote'>"+a.vote_average+"</span></figcaption>"+
                  "<h2 class='movie__title'>"+a.title+"</h2>"+
              " </figure>"+
            "</div>"+
         "</li>");
        });
    }

    onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    console.log(`The user just pressed ${ev}!`);
    console.log(this.nome1);
    this.GetMovie(this.nome1);
  }
    
}
