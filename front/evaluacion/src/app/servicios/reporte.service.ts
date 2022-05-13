import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../modelos/Reporte.modelo';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor( private http: HttpClient) { }
  private urlapi = "http://localhost:8080/evaluacion/rs/reporte/obtener"

  getReporte(codEmpresa:number,codSubCategoria:number,anio:String,mes:number):Observable<Reporte>{
    return this.http.get<Reporte>(`${this.urlapi}/${codEmpresa}/${codSubCategoria}/${anio}/${mes}`)
  }
}
