import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { CambiarContrasenaComponent } from './componentes/cambiar-contrasena/cambiar-contrasena.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:'/login',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recuperar-contraseña',
    component: RecuperarContrasenaComponent
  },
  {
    path: 'cambiar-contraseña',
    component: CambiarContrasenaComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'Reportes',
    component: ReportesComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '**',
    component: InicioComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
