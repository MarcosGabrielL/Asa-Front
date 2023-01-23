import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './components/security/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ASA';

isLoggedIn = false;
    nome1: string="";  
    filme: boolean=true;
    serie: boolean=false;

     constructor( private router: Router,
                  private route: ActivatedRoute,
                  private authenticationService: LoginService) { }
                  
       ngOnInit() {
        this.isLoggedIn = this.authenticationService.isUserLoggedIn();
        console.log('menu ->' + this.isLoggedIn);
        if(window.location.href.includes("serie")){
        this.filme = false;
        this.serie = true;
        }
      }

    handleLogout() {
        this.authenticationService.logout();
	this.router.navigate(['/login']);
      }

       onKeyUp(ev:KeyboardEvent) {
    // do something meaningful with it
    console.log(`The user just pressed ${ev}!`);
    let urlbusca = 'busca/filme/';
    this.router.navigate([urlbusca.concat(this.nome1)]);
    //this.GetMovie(this.nome1);
  }
       onKeyUp1() {
    // do something meaningful with it
    let urlbusca = 'busca/filme/';
    this.router.navigate([urlbusca.concat(this.nome1)]);
    //this.GetMovie(this.nome1);
  }
  
  
  
}
