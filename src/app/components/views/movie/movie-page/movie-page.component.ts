import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

import { MovieService } from '../movie.service';
import { MovieDetails } from '../movie.model';
import { Credits } from '../movie.model';
import { Cast } from '../movie.model';
import { Crew } from '../movie.model';
import { ReleaseDateResult } from '../movie.model';
import { ResultVideo } from '../movie.model';
import { Video } from '../movie.model';
import { Genre } from '../movie.model';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class MoviePageComponent implements OnInit {

  constructor(private service: MovieService,  private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
    
    moviedetails: MovieDetails[] = [];
    credits: Credits[] = [];
    cast: Cast[] = [];
    crew: Crew[] = [];
    releasedateresult: ReleaseDateResult[] = []
    resultvideo: ResultVideo[] = []
    video: Video[] = []
    generos: Genre[] = []
    generosString: string = "";

    idmovie: string = "";

    tituloString: string = "";
    release_dateString: string = "";
    imagePath: string = "";
    trailerPath: string = "";
    vote_averageString: string = "";
    overviewString: string = "";
    runtimeString: string = "";
    thecastString: string = "";
    

  ngOnInit(): void {
    this.idmovie = this.route.snapshot.paramMap.get("id")!;
    this.GetDetails();
  }

    GetDetails(){
        this.service.GetDetails(this.idmovie).subscribe((resposta) => {
            this.moviedetails = resposta;
            console.log(resposta);

                 this.tituloString = ""+Object.values(resposta)[21];
                this.release_dateString = "<br>"+Object.values(resposta)[15];
                    this.release_dateString = this.release_dateString.substring(0, 8);
                this.imagePath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+Object.values(resposta)[12];
                this.vote_averageString = ""+Object.values(resposta)[23];
                this.overviewString = ""+Object.values(resposta)[10];
                this.runtimeString = ""+Object.values(resposta)[17] + " Min";
                this.generos = Object.values(Object.values(resposta)[4]);
                //console.log(this.generos[0].name);
                     this.generos.forEach( (a) => {
                     this.generosString = this.generosString.concat(" "+a.name + ", ");
                     });
                const firstValue = Object.values(resposta)[26];
                this.credits = Object.values(firstValue);
                //console.log(this.credits);
                    const secondValue = Object.values(this.credits)[0];
                    this.cast = Object.values(secondValue);
                    const terdValue = Object.values(this.credits)[1];
                    this.crew = Object.values(terdValue);
                    //console.log(this.cast);
                const foutValue = Object.values(resposta)[25];
                this.releasedateresult = Object.values(foutValue);
                //console.log(this.releasedateresult);
                const fifitValue = Object.values(resposta)[27];
                this.resultvideo = Object.values(fifitValue)[0];
                //console.log(this.resultvideo);
                const sixtValue = Object.values(this.resultvideo)[0];
                this.video = Object.values(sixtValue);
                //console.log(this.video);
                    if(""+this.video[4] === "YouTube"){
                           // console.log("É Youtube");
                            this.trailerPath = "https://www.youtube.com/embed/"+this.video[3]+"?controls=0";
                            //this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
                    }

                    this.showElenco();
            });  
    }
    
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ["<i style='font-size: 28px;' class='fa fa-chevron-left'></i>", "<i style='font-size: 28px;' class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1 
      }
    },
    nav: true
  }

    videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerPath);
  }

    showElenco(){
            this.thecastString = "";
            let cont = 0;
        this.cast.forEach( (a) => {
          cont = cont +1;
          if(cont >= 7){
         
            }else{
                this.thecastString = this.thecastString.concat
                ("<li>"+
                    "<a class='person-item' style='font-weight: bold; font-size: 1.3em;'>"+
                        "<img src="+"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+a.profile_path+" style='width: 60px; height: 60px; border-radius: 50%; background-position: center; margin-left: 4px; background-size: cover; background-repeat: no-repeat;'>"+
                            "<span class='person-name'>"+a.name+"</span>"+
                            "<span class='person-nage'>"+a.character+"</span>"+
                    "</a>"+
                    "</li>");
            }
        });
        
    }
}
