import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Anio } from 'src/app/modelos/Anio.modelo';
import { Categoria } from 'src/app/modelos/Categoria.modelo';
import { Empresa } from 'src/app/modelos/Empresa.modelo';
import { CategoriaService } from 'src/app/servicios/Categoria.service';
import { EmpresaService } from 'src/app/servicios/Empresa.service';




@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  categorias: Categoria[] = [];
  empresas: Empresa[] = []
  anios: Anio[] = []
  form: any; 


  constructor(
    private categoriaService: CategoriaService,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerEmpresas();
    this.obtenerAnios();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      categoria:['',[Validators.required]],
      opcion:['',[Validators.required]]
    })
  }

  obtenerCategorias(){
    this.categoriaService.getCategorias().subscribe(data=>{
      this.categorias=data;
      console.log(this.categorias)
    })
  }

  obtenerEmpresas(){
    this.empresaService.getEmpresa(1,"2020",2).subscribe(data=>{
      this.empresas=data;
      console.log(this.empresas)
    })
  }

  obtenerAnios(){
    this.categoriaService.getAnios().subscribe(data=>{
      this.anios= data;
      console.log(this.anios)

    })
  }

  obtenerDatos(event:Event){
    event?.preventDefault()
    const valores = this.form.value;
    console.log(valores)
  }

}
