import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Anio } from '../modelos/Anio.modelo';
import { Categoria } from '../modelos/Categoria.modelo';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }

  private urlapi = "http://localhost:8080/evaluacion/rs/categoria/obtener"

  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlapi)
  }

  getAnios():Observable<Anio[]>{
    return this.http.get<Anio[]>("http://localhost:8080/evaluacion/rs/anio/obtener")
  }
}
