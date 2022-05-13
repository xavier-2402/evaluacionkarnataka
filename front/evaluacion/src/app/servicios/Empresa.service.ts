import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresa } from '../modelos/Empresa.modelo';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  private urlapi = "http://localhost:8080/evaluacion/rs/empresa/obtener"


  getEmpresa(codCategoria: number, anio: string, mes: number):Observable<Empresa[]>{
    
    return this.http.get<Empresa[]>(`${this.urlapi}/${codCategoria}/${anio}/${mes}`)
  }
}
