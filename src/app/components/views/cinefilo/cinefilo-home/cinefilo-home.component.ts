import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../security/login.service';
import { CinefiloService } from '../cinefilo.service';
import { UserService } from '../user.service';
import { Cinefilo } from '../cinefilo.model';
import { User } from '../user.model';

@Component({
  selector: 'app-cinefilo-home',
  templateUrl: './cinefilo-home.component.html',
  styleUrls: ['./cinefilo-home.component.css']
})
export class CinefiloHomeComponent implements OnInit {

    user: User[] = [];
    cinefilo: Cinefilo[] = [];
    email: string = "";
    usuario: User = {"id": 0, "email": "", "password": "","firstName":"", "lastName":""}
    

  constructor(private authenticationService: LoginService,
              private cinefiloservice : CinefiloService,
              private userservice : UserService
            ) { }

    ngOnInit(): void {
        //Verifica se está logado
        if(this.authenticationService.isUserLoggedIn()){
            //Pega email do usuario logado
            this.email = this.authenticationService.getLoggedInUserName();
	    //console.log(this.email);
            
	    this.BuscarCinefilo();
            
        }

    }

    BuscarCinefilo(){
        //Pega usuario pelo email
         this.userservice.getByEmail(this.email).subscribe((resposta: User) => {
                this.usuario = resposta;
        console.log(this.usuario.id);


	//Pega cinefilo pelo id do usuario
	
			
      		this.cinefiloservice.findById(this.usuario.id).subscribe((resposta) => {
			console.log(resposta);
			this.cinefilo = Object.values(resposta);
			console.log(this.cinefilo);
      	   	});


         }); 

	
	
	
	
    }

}
