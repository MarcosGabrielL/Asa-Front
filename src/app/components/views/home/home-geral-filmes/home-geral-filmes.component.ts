import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-geral-filmes',
  templateUrl: './home-geral-filmes.component.html',
  styleUrls: ['./home-geral-filmes.component.css']
})
export class HomeGeralFilmesComponent implements OnInit {

    

  constructor() { }

  ngOnInit(): void {
        
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
    
    
}
