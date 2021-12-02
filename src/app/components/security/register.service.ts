import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    
    baseUrl: String = environment.baseUrl;

  constructor() { }
}
