import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

 m1 = true;
  
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("genero"));
    console.log("O");
  }

}
