import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asafrontapp';
     constructor( private router: Router) { }

}
