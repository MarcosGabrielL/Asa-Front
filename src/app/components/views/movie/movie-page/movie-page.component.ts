import { OwlOptions,CarouselModule } from 'ngx-owl-carousel-o';
import { Component, OnInit, ViewEncapsulation,ViewChild, ElementRef } from '@angular/core';
import { Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform, NgModule} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { formatDate } from "@angular/common";
import { Observable } from 'rxjs';


import { ComentarioService } from '../comentario.service';
import { MovieService } from '../movie.service';
import { MovieDetails , Torrent} from '../movie.model';
import { Credits } from '../movie.model';
import { Cast } from '../movie.model';
import { Crew } from '../movie.model';
import { ReleaseDateResult } from '../movie.model';
import { ResultVideo } from '../movie.model';
import { Video } from '../movie.model';
import { Genre } from '../movie.model';
import { Comentario } from '../movie.model';

import { LoginService } from '../../../security/login.service';
import { UserService } from '../../cinefilo/user.service';
import { User } from '../../cinefilo/user.model';
import { Cinefilo } from '../../cinefilo/cinefilo.model';
import { CinefiloService } from '../../cinefilo/cinefilo.service';


import {NgbModal, ModalDismissReasons, NgbModalConfig,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
    encapsulation: ViewEncapsulation.None ,
    providers: [NgbModalConfig, NgbModal],
    
})

export class MoviePageComponent implements OnInit {
	
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
	
	mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }

	

  constructor(config: NgbModalConfig, private modalService: NgbModal, private comentarioservice : ComentarioService , private service: MovieService,  private route: ActivatedRoute, private sanitizer: DomSanitizer,
            private authenticationService: LoginService,
            private cinefiloservice : CinefiloService,
              private userservice : UserService) { 
	config.backdrop = 'static';
		config.keyboard = false;
}
              
              
    
    moviedetails: MovieDetails[] = [];
    Torrents: Torrent[] = [];
    credits: Credits[] = [];
    cast: Cast[] = [];
    crew: Crew[] = [];
    releasedateresult: ReleaseDateResult[] = []
    resultvideo: ResultVideo[] = []
    video: Video[] = []
    generos: Genre[] = []
    generosString: string = "";
    comentario: Comentario[] = [];

    idmovie: string = "";

    tituloString: string = "";
    tituloString_en: string = "";
    release_dateString: string = "";
    imagePath: string = "";
    trailerPath: string = "";
    vote_averageString: string = "";
    overviewString: string = "";
    runtimeString: string = "";
    thecastString: string = "";
    thecomentarioString: string = "";
    tempo: string = "";
    hora: string = "";

    user: User[] = [];
    cinefilo: Cinefilo[] = [];
    email: string = "";
    usuario: User = {"id": 0, "email": "", "password": "","firstName":"", "lastName":""}

    coment: Comentario = {"id": 0,
                            //@Column(nullable = false)
                            "critica": "",
                            //@Column(nullable = false)
                            "idmovie": "",
                            //@Column(nullable = false)
                            "idcinefilo": "",
                            //@Column(nullable = false)
                            "data": "",
                            //@Column(nullable = false)
                             "avaliação": "",
                             "curtidas_1_estrela": "",
                             "curtidas_2_estrela": "",
                             "curtidas_3_estrela": "",
                             "curtidas_4_estrela": "",
                             "curtidas_5_estrela": "",
                             "score": ""};
     id: string = "";
     critica : string = "";
    idcinefilo: string = "";
    Data: string = "";
    Avaliacao: string = "";
    cinefi: Cinefilo = {"id": 0,
                        "user": "",
                        "email": "",
                        "nome": "",
                        "telefone": "",
                        "idade":"",
                        "foto":""};
                        
                          closeResult = '';

  ngOnInit(): void {
    this.idmovie = this.route.snapshot.paramMap.get("id")!;
    this.GetDetails();
    this.getcomentarios();
    
  }
  
  

    GetDetails(){
        this.service.GetDetails(this.idmovie).subscribe((resposta) => {
            this.moviedetails = resposta;
            console.log(resposta);

                 this.tituloString = ""+Object.values(resposta)[21];
                 this.getTorrents();
                
                this.release_dateString = "<br>"+Object.values(resposta)[15];
                
                    this.release_dateString = this.release_dateString.substring(0, 8);
                this.imagePath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+Object.values(resposta)[12];
                this.vote_averageString = ""+Object.values(resposta)[23];
                this.vote_averageString = this.vote_averageString.substring(0,4);
                this.overviewString = ""+Object.values(resposta)[10];
                this.overviewString = this.overviewString.substring(0, 180).concat("...");
                this.runtimeString = ""+Object.values(resposta)[17] + " Min";
                this.generos = Object.values(Object.values(resposta)[4]);
                //console.log(this.generos[0].name);
                     this.generos.forEach( (a) => {
                     this.generosString = this.generosString.concat(" "+a.name + ", ");
                     });
                     this.generosString = this.generosString.substring(0,30).concat("...");
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
                          // console.log(this.video[3]);
                            this.trailerPath = "https://www.youtube.com/embed/"+this.video[3]+"?autoplay=1&controls=0";
                            //this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfSrc);
                    }

                    this.showElenco();
            });  
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

	
    

    getcomentarios(){
	this.comentarioservice.getComentariosByIdMovie(this.idmovie).subscribe((result)=> {
        this.comentario = Object.values(result);
        console.log(this.comentario);
	this.showcomentarios();
        }, () => {
        //console.log(result);
         });  
    }

    showcomentarios(){
	this.thecomentarioString = "";
    let cont = 0;
    this.comentario.forEach( (a) => {

		//Pega Tempo desde comentario
		this.comentarioservice.getTempoDecorrido(a.data).subscribe((resposta: string)=> {
		this.tempo = resposta;
		//console.log(this.tempo);
            });

                //Pega cinefilo pelo id do usuario	
                    this.cinefiloservice.findById(parseFloat(a.idcinefilo)).subscribe((resposta: Cinefilo) => {
                         this.cinefi = resposta;
                        // console.log(this.cinefi.nome);
                   
                this.thecomentarioString = this.thecomentarioString.concat
                ("<li ><div class=\"comment-main-level\" >\n" +
"					<!-- Avatar -->\n" +
"					<div class=\"comment-avatar\"><img src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2//cc0kXVI82iosBRA7HoG7lVuUeRh.jpg\" alt=\"\"></div>\n" +
"					<!-- Contenedor del Comentario -->\n" +
"                                        <div class=\"comment-box\" > \n" +
"						<div class=\"comment-head\">\n" +
"							<h6 style=\"margin-top: 3px; \" class=\"comment-name by-author\">"+
"                                                            <a >"+this.cinefi.nome+"</a>\n" +
"                                                        <a   class='ava' >"+parseFloat(a.critica)*2+"/10</a></h6>\n" +
"                                                        <span style=\"margin-top: 3px; top:0px;\">"+this.tempo+"</span>\n" +
"							<i class=\"fa fa-star\"></i>\n" +
"                                                        <i class=\"fa fa-star\"></i>\n" +
"                                                        <i class=\"fa fa-star\"></i>\n" +
"                                                        <i class=\"fa fa-star\"></i>\n" +
"                                                        <i class=\"fa fa-star\"></i>\n" +
"                                                        <a  class='usava' >10/10</a>\n" +
"						</div>\n" +
"						<div style=\"padding-top: 0px;\" class=\"comment-content\">"+a.avaliação+"</div>\n" +
"					</div>\n" +
"				</div></li>");
             });
        });
        
    }

	enviar_coment(){

            //Pega data formatada
		this.comentarioservice.getHoraServidor().subscribe((resposta: string) => {
			this.hora = resposta;
			console.log(resposta);
		 }); 
            
            //Pega id inefilo
                //Verifica se está logado
                if(this.authenticationService.isUserLoggedIn()){
                    //Pega email do usuario logado
                    this.email = this.authenticationService.getLoggedInUserName();
                        //Pega usuario pelo email
                        this.userservice.getByEmail(this.email).subscribe((resposta: User) => {
                           // this.usuario = resposta;
                            console.log(this.usuario.id);
                            this.idcinefilo = this.usuario.id.toString();
                            //console.log(resposta);

                                //Pega cinefilo pelo id do usuario	
                                //this.cinefiloservice.findById(this.usuario.id).subscribe((resposta) => {
                                  //      console.log(resposta);
                                    //    this.cinefilo = Object.values(resposta);
                                      //  console.log(this.cinefilo);
                                //});
                   

            //Peva valores do form e envia
            
            this.coment = {"id": 0,
                            "critica": this.critica,
                            "idmovie": this.idmovie,
                            "idcinefilo": resposta.id + '',
                            "data": this.hora,
                             "avaliação": this.Avaliacao,
                             "curtidas_1_estrela": "",
                             "curtidas_2_estrela": "",
                             "curtidas_3_estrela": "",
                             "curtidas_4_estrela": "",
                             "curtidas_5_estrela": "",
                             "score": ""};
                           
                console.log(this.coment);
            this.comentarioservice.create(this.coment, this.idmovie).subscribe((result)=> {
                this.comentarioservice.mensagem("Comentario criado com sucesso!");
                this.getcomentarios();
                this.Avaliacao = "";
                this.critica = "";
            }, () => {
                this.comentarioservice.mensagem("Erro ao criar comentario!");
             }); 
               }); 

                }
	}
	
	
	getTorrents(){
		this.service.GetDetailsEnglish(this.idmovie).subscribe((resposta) => {
            this.moviedetails = resposta;
            console.log(resposta);
              
				this.service.GetTorrentsDublado(this.tituloString,  ""+Object.values(resposta)[21] ).subscribe((result)=> {
				       this.Torrents = Object.values(result);
				        //console.log("This.Torrentes" +this.Torrents);
					this.showcomentarios();
				        }, () => {
				        //console.log(result);
				         }); 
               
            });  
	 
    }
    
    sanitize(url:any){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
	
}
