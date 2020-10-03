import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//date
import { MatNativeDateModule  } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { RecuperarContrasenaComponent } from './componentes/recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { BarraInferiorComponent } from './componentes/barra-inferior/barra-inferior.component';
import { MirarVideoComponent } from './componentes/mirar-video/mirar-video.component';
import {MatSelectModule} from '@angular/material/select';
import { EditarperfilComponent } from './componentes/editarperfil/editarperfil.component';
import {MatButtonModule} from '@angular/material/button';
import { EditarusuarioComponent } from './componentes/editarusuario/editarusuario.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { InfoCursoComponent } from './componentes/info-curso/info-curso.component';
import { MisCursosComponent } from './componentes/mis-cursos/mis-cursos.component';
import { FuncionesProfesorComponent } from './compponentes/funciones-profesor/funciones-profesor.component';
import { FiltroMisCursosPipe } from './Pipes/filtro-mis-cursos.pipe';
import { FiltroUsuariosPipe } from './pipes/filtro-usuarios.pipe';
import {MatTableModule} from '@angular/material/table';
import { ResponderPreguntasComponent } from './componentes/responder-preguntas/responder-preguntas.component';
import { FuncionesAdministradorComponent } from './componentes/funciones-administrador/funciones-administrador.component';





@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    LoginComponent,
    InicioComponent,
    ReportesComponent,
    RecuperarContrasenaComponent,
    RegistroComponent,
    CategoriasComponent,
    ComunidadComponent,
    


    EditarperfilComponent,
    EditarusuarioComponent,
   



    BarraInferiorComponent,
    MirarVideoComponent,
    EditarperfilComponent,
    CrearCursoComponent,
    InfoCursoComponent,
    MisCursosComponent,
    FuncionesProfesorComponent,
    FiltroMisCursosPipe,
    FiltroUsuariosPipe,
    ResponderPreguntasComponent,
    FuncionesAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
