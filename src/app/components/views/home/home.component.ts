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
  
  
  ngOnInit(): void {
                this.genero =  this.service.data;
   
    
    console.log(this.genero);
    //console.log("O");
  }

}
