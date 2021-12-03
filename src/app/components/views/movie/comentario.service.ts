import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from './Comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

	baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

	getComentariosByIdMovie(idmovie: string): Observable<Comentario[]>{
        return this.http.get<Comentario[]>("".concat(idmovie))
    }

	findAll():Observable<Comentario[]> {
    const url = `${this.baseUrl}/cinefilos`
    return this.http.get<Comentario[]>(url)
  }
  
   findById(id: number): Observable<Comentario> {
    const url = `${this.baseUrl}/cinefilos/cinefilo/${id}`
    return this.http.get<Comentario>(url)
  }

 create(cinefilo: Comentario ): Observable<Comentario>{
    const url = `${this.baseUrl}/cinefilo/add`
    return this.http.post<Comentario>(url, cinefilo);
  }
  
  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<void>(url)
  }

  update(categoria: Comentario ):Observable<void> {
    const url = `${this.baseUrl}/cinefilo/update/${categoria}`
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
