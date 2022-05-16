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

  form: any; 


  constructor(
  
    private formBuilder: FormBuilder
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
   
  }

  buildForm(){
    this.form = this.formBuilder.group({
      categoria:['',Validators.max(4)],
      telefono:['',[Validators.required,Validators.pattern(/^[+{1}][0-9]{9}$/gm)]]
    })
  }

 

}
