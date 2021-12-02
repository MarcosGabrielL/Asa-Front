import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password : string = "";
  errorMessage = 'Invalid Credentials';
  successMessage: string = "";
  invalidLogin = false;
  loginSuccess = false;

    authRequest:any ={
    "email":"email",
    "password":"pass"
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService) {   }


  ngOnInit(): void {
  }
    
    handleLogin() {
    
    this.authRequest={
    "email":this.email,
    "password":this.password
  };

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
  }
}
