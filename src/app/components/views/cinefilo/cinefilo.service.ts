import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinefilo } from './cinefilo.model';

@Injectable({
  providedIn: 'root'
})
export class CinefiloService {

    baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Cinefilo[]> {
    const url = `${this.baseUrl}/cinefilos`
    return this.http.get<Cinefilo[]>(url)
  }
  
   findById(id: number): Observable<Cinefilo> {
    const url = `${this.baseUrl}/cinefilos/cinefilo/${id}`
    return this.http.get<Cinefilo>(url)
  }

 create(cinefilo: Cinefilo): Observable<Cinefilo>{
    const url = `${this.baseUrl}/cinefilo/add`
    return this.http.post<Cinefilo>(url, cinefilo);
  }
  
  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<void>(url)
  }

  update(categoria: Cinefilo):Observable<void> {
    const url = `${this.baseUrl}/cinefilo/update/${categoria.id}`
    return this.http.put<void>(url, categoria)
  }
  
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
