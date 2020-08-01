import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    LoginComponent,
    InicioComponent,
    ReportesComponent,
    RecuperarContrasenaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
