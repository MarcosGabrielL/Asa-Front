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

   
   genero: string = "";
  
  m1 = true;
  m2 = false;
  m3 = false;
  m4 = false;
  
  ngOnInit(): void {
                this.genero =  this.service.data;
    
    if(this.genero === ""){
      this.m1 = true;
    } if(this.genero === "28"){
         this.m2 = true;
    } if(this.genero === "12"){
         this.m3 = true;
    } if(this.genero === "16"){
         this.m4 = true;
    }
    
    
    console.log(this.genero);
    //console.log("O");
  }

}
