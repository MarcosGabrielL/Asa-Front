import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from './movie.model';

import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

	baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

    getComentariosByIdMovie(idmovie: string): Observable<Comentario[]>{
        return this.http.get<Comentario[]>(`${this.baseUrl}/comentarios/movie/`.concat(idmovie))
    }

    getComentarioByIdCinefilo(idcinefilo: string): Observable<Comentario[]> {
        const url = `${this.baseUrl}/comentarios/cinefilo/`.concat(idcinefilo);
        return this.http.get<Comentario[]>(url)
    }
  
    findById(id: number): Observable<Comentario> {
        const url = `${this.baseUrl}/comentarios/comentario/${id}`
        return this.http.get<Comentario>(url)
    }

    create(comentario: Comentario, idmovie : string ): Observable<Comentario>{
        const url = `${this.baseUrl}/comentarios/comentario/add/${idmovie}`
        return this.http.post<Comentario>(url, comentario);
    }
  
    delete(id: String):Observable<void> {
        const url = `${this.baseUrl}/comentarios/comentario/movie/{idmovie}/update/${id}`
        return this.http.delete<void>(url)
    }

  update(comentario: Comentario ):Observable<void> {
    const url = `${this.baseUrl}/comentarios/comentario/delete/${comentario.id}`
    return this.http.put<void>(url, comentario)
  }
  
  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

	getTempoDecorrido(horacomentad?: string): Observable<string> {
		
		 const url = `${this.baseUrl}/comentarios/util/TempoDecorrido/${horacomentad}`
        return this.http.get(url, { responseType: 'text' })
	}

	getHoraServidor(): Observable<string> {
		 const url = `${this.baseUrl}/comentarios/util/HoraServidor`
        return this.http.get(url, { responseType: 'text' })
	}

}
