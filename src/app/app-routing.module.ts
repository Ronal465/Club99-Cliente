import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {LoginComponent} from './componentes/login/login.component';
import {ReportesComponent} from "./componentes/reportes/reportes.component";
import { RegistroComponent } from './componentes/registro/registro.component';
import { RecuperarContrasenaComponent } from "./componentes/recuperar-contrasena/recuperar-contrasena.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
