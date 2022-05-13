import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/Categoria.modelo';
import { Empresa } from 'src/app/modelos/Empresa.modelo';
import { Anio } from 'src/app/modelos/Anio.modelo';
import { Reporte } from 'src/app/modelos/Reporte.modelo'
import { CategoriaService } from 'src/app/servicios/Categoria.service';
import { EmpresaService } from 'src/app/servicios/Empresa.service';
import { ReporteService } from 'src/app/servicios/reporte.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  categorias: Categoria[] = [];
  empresas: Empresa[] = []
  anios: Anio[] = []
  reporte:Reporte = {codEmpresa:0,nombreEmpresa:'',totalCompletas:0,totalIncompletas:0}
  form:any
  formEmpresa:any
  myChart:any
  chartPastel:any
  constructor(
    private categoriaService: CategoriaService,
    private empresaService: EmpresaService,
    private reporteService: ReporteService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.obtenerCategorias()
    this.obtenerAnios()
    this.buildForm()
    this.buildFormEmpresa()
  }
  buildForm(){
    this.form = this.formBuilder.group(
      {
        categoria:[Validators.required],
        anio:[Validators.required],
        mes:[Validators.required]

      }
    )
  }
  buildFormEmpresa(){
    this.formEmpresa = this.formBuilder.group(
      {
        empresa:[Validators.required]
      }
    )
  }
  obtenerCategorias(){
    this.categoriaService.getCategorias().subscribe(data=>{
      this.categorias=data
      console.log(this.categorias)
    })
  }

  obtenerAnios(){

    this.categoriaService.getAnios().subscribe(data =>{
      this.anios = data;
      console.log(this.anios)
    })
  }

  obtenerEmpresas(event:Event){
    event?.preventDefault()
    const valores = this.form.value;
    this.empresaService.getEmpresa(valores.categoria,valores.anio,valores.mes).subscribe(data=>{
      this.empresas = data
    })
  }
  obtenerReporte(event:Event){
    event.preventDefault()
    const valoresform = this.form.value
    const valorEmpresa = this.formEmpresa.value
    this.reporteService.getReporte(valorEmpresa.empresa,valoresform.categoria,valoresform.anio,valoresform.mes).subscribe(data=>{
      this.reporte = data
      console.log(this.reporte)
      this.miChartBarras()
      this.miChartPastel()
    })
  }
  miChartBarras(){
    if(this.myChart){
      this.myChart.destroy();
    }
    this.myChart = new Chart("graficaBarras", {
      type: 'bar',
      data: {
          labels: [this.reporte.nombreEmpresa],
          datasets: [{
              label: 'Ventas',
              data: [this.reporte.totalCompletas+this.reporte.totalIncompletas],
              backgroundColor: [
                  '#6ab9aa'
              ],
              borderColor: [
                  '#53a898'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  }

  miChartPastel(){
    if(this.chartPastel){
      this.chartPastel.destroy()
    }
    this.chartPastel = new Chart("graficaPastel", {
      type: 'pie',
      data: {
          labels: ['Completas','Incompletas'],
          datasets: [{
              label: "Ventas",
              data: [this.reporte.totalCompletas,this.reporte.totalIncompletas],
              backgroundColor: [
                  '#6ab9aa',
                  '#ec865d'
              ],
              borderColor: [
                  '#347b75',
                  '#b95e39'
              ],
              borderWidth: 1
          }]
      }
  });
  }
}
