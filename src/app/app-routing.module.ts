import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CategoriasComponent } from "./componentes/categorias/categorias.component";
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { MirarVideoComponent } from "./componentes/mirar-video/mirar-video.component";
import { EditarperfilComponent } from './componentes/editarperfil/editarperfil.component';
import { EditarusuarioComponent } from './componentes/editarusuario/editarusuario.component';
import { CrearCursoComponent } from "./componentes/crear-curso/crear-curso.component";
import { InfoCursoComponent } from "./componentes/info-curso/info-curso.component";
import { MisCursosComponent } from "./componentes/mis-cursos/mis-cursos.component";
import {ResponderPreguntasComponent } from "./componentes/responder-preguntas/responder-preguntas.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full'
  }, 
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Inicia Ya',
    component: LoginComponent
  },
  {
    path: 'RecuperarContraseña',
    component: RecuperarContrasenaComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'Reportes',
    component: ReportesComponent
  },
  {
    path: 'Registro',
    component: RegistroComponent
  },
  {
    path: 'ValidacionCorreoRegistro/:TokenRegister',
    component: RegistroComponent
  },
  {
    path: 'RecuperarContrasena/:TokenRecuperar',
    component: RecuperarContrasenaComponent
  },
  {
    path: 'Categorías',
    component: CategoriasComponent
  },
  {
    path: 'Comunidad',
    component: ComunidadComponent
  },
  {
    path: 'InfoCurso',
    component: InfoCursoComponent
  },
  {
    path: 'Mis Cursos',
    component: MisCursosComponent
  },

  {
    path: 'Buscador',
    component: CategoriasComponent
  },
  {
    path: 'CrearCurso',
    component: CrearCursoComponent

  },
  {
    path: 'EditarUsuario',
    component: EditarusuarioComponent
  },
  {
    path: 'Mi Perfil',
    component: EditarperfilComponent
  },
  {
    path: 'Gestion Usuarios',
    component: EditarusuarioComponent
  }
  , {
    path: 'MirarCurso/:idCurso',
    component: MirarVideoComponent
  },
  {
    path: 'ResponderPreguntas',
    component: ResponderPreguntasComponent
  }
  ,
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
