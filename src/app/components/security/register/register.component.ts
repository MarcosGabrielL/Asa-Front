import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password : string = "";
  firstName : string = "";
  lastName : string = "";
  errorMessage = 'Invalid Credentials';
  successMessage: string = "";
  invalidLogin = false;
  loginSuccess = false;

     authRequest:any ={
    "email":"email",
    "password":"pass",
    "firstName":"first",
    "lastName":"last"
  };
     authRequestRegister:any ={
    "email":"email",
    "password":"pass"
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService,
    private registerService: RegisterService) {   }


  ngOnInit(): void {
  }
    
   handleLogin() {
    
    this.authRequestRegister={
    "email":this.email,
    "password":this.password,
    "firstName":this.firstName,
    "lastName":this.lastName
     };
    
    this.authRequest={
    "email":this.email,
    "password":this.password
    };

    this.registerService.registration(this.authRequestRegister).subscribe((result)=> {
        this.successMessage = 'Register Successful.';
        this.authenticationService.mensagem(this.successMessage); 
            this.authenticationService.authenticationService(this.authRequest).subscribe((result)=> {
                this.invalidLogin = false;
                this.loginSuccess = true;
                this.authenticationService.createBasicAuthToken(this.email, this.password);
                this.authenticationService.registerSuccessfulLogin(this.email, this.password);
                this.successMessage = 'Login Successful.';
                this.authenticationService.mensagem(this.successMessage);
                this.router.navigate(['/home-cinefilo']);
              }, () => {
                this.invalidLogin = true;
                this.loginSuccess = false;
                this.authenticationService.mensagem(this.errorMessage);
              });
    }, () => {
	this.errorMessage = 'Error Registration';
        this.authenticationService.mensagem(this.errorMessage);
        
     }); 

          
  }


}

