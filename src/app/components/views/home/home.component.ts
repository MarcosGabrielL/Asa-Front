import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HomeGeralFilmesService } from "src/app/components/views/home/home-geral-filmes/home-geral-filmes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute, private service: HomeGeralFilmesService) { }

    m1 = false;
  m2 = false;
  m3 = false;
  m4 = false;
  m5 = false;
  m6 = false;
  m7 = false;
  m8 = false;
  m9 = false;
  m10 = false;
  m11 = false;
  m12 = false;
  m13 = false;
  m14 = false;
  m15 = false;
  m16 = false;
  m17 = false;
  m18 = false;
  m19 = false;
   genero: string = "";
  
  ngOnInit(): void {
                this.genero =  this.service.data;
         
    if(this.genero === "28"){
      this.m2 = true;
    }
    
    //console.log(this.genero);
    //console.log("O");
  }

}
