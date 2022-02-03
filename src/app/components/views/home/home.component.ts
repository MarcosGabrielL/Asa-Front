import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HomeGeralFilmesService } from "home-geral-filmes/home-geral-filmes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute, private service: HomeGeralFilmesService) { }

m1 = true;
   genero: string = "";
  
  ngOnInit(): void {
                this.genero =  this.service.data;
         
    console.log(this.genero);
    console.log("O");
  }

}
