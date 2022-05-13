import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/Categoria.modelo';
import { Empresa } from 'src/app/modelos/Empresa.modelo';
import { Anio } from 'src/app/modelos/Anio.modelo';
import { Reporte } from 'src/app/modelos/Reporte.modelo';
import { CategoriaService } from 'src/app/servicios/Categoria.service';
import { EmpresaService } from 'src/app/servicios/Empresa.service';
import { ReporteService } from 'src/app/servicios/reporte.service';
import { Chart } from 'chart.js'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reporte-unico',
  templateUrl: './reporte-unico.component.html',
  styleUrls: ['./reporte-unico.component.css']
})
export class ReporteUnicoComponent implements OnInit {

  categorias: Categoria[] = [];
  empresas: Empresa[] = []
  anios: Anio[] = []
  reporte: any
  form:any
  constructor( 
    private categoriaService: CategoriaService,
    private empresaService: EmpresaService,
    private reporteService: ReporteService,
    private formBuilder: FormBuilder
    ) { 
      this.buildForm()
    }


  ngOnInit(): void {
    this.obtenerCategorias()
    this.obtenerAnios()
   
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
  
  obtenerCategorias(){
    this.categoriaService.getCategorias().subscribe(data=>{
      this.categorias=data
      console.log(this.categorias)
    })
  }


  obtenerAnios(){

    this.categoriaService.getAnios().subscribe(data =>{
      this.anios = data;
    })
  }

  obtenerEmpresas(event:Event){
    event?.preventDefault()
    const valores = this.form.value;
    this.empresaService.getEmpresa(valores.categoria,valores.anio,valores.mes).subscribe(data=>{
      this.empresas = data
      console.log(this.empresas)
    })
  }
  /*
  obtenerReporte(event:Event){
    event.preventDefault()
    const valoresform = this.form.value
    const valorEmpresa = this.formEmpresa.value
    this.reporteService.getReporte(valorEmpresa.empresa,valoresform.categoria,valoresform.anio,valoresform.mes).subscribe(data=>{
      this.reporte = data
      console.log(this.reporte)
    })
  }
  */


  

}
