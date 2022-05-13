import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ReporteUnicoComponent } from './componentes/reporte-unico/reporte-unico.component';
import { NgChartsModule} from 'ng2-charts';
import { VistaComponent } from './componentes/vista/vista.component'

@NgModule({
  declarations: [
    AppComponent,
    ReporteComponent,
    ReporteUnicoComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
