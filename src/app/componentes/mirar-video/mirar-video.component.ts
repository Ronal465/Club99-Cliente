import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerCursoService } from "../../servicios/ver-curso.service";
import { CrearCursoService } from "../../servicios/crear-curso.service";

@Component({
  selector: 'app-mirar-video',
  templateUrl: './mirar-video.component.html',
  styleUrls: ['./mirar-video.component.scss']
})
export class MirarVideoComponent implements OnInit {


  Curso = {
    Descripcion: "a",
    LinkImagen: "",
    Nombre: "a",
    Valoracion: 0,
    idCurso: 0,
    idEstadoCurso: 0,
    idProfesor: 0
  }

  PorcentajeCurso: any = 20;

  Seccion = {
    idSeccionCurso: 0,
    Nombre: "",
    LinkMultimedia: "",
    idTipoArchivoMultimedia: 0,
    idCurso: 0,
    Numero: 0,
    Contenido: ""
  }

  Secciones = [];

  Profesor = {
    idProfesorCurso: 0,
    Nombre: "",
    biografia: "",
    LinkImagenProfesor: "https://www.elcolombiano.com/documents/10157/0/580x387/0c11/580d365/none/11101/PILJ/image_content_36371796_20200915164613.jpg",
  }

  ListaCursosProfesor = [];
  ListaExperienciaProfesor = [];

  idCurso;
  TokenLogin;

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router,
    private VerCursoService: VerCursoService, private CrearCursoService: CrearCursoService) { }

  ngOnInit(): void {
    this.TokenLogin = localStorage.getItem('TokenLogin');
    this.idCurso = this.ActivatedRoute.snapshot.params.idCurso;

    if (this.idCurso != null) {

      this.VerCursoService.ObtenerCursoUsuario(this.TokenLogin, this.idCurso).subscribe(
        res => {
          this.Curso = res;
          console.log(res);
          console.log(this.Curso);

          this.CrearCursoService.GetListSeccioness(this.idCurso).subscribe(
            res2 => {
              this.Secciones = res2;
              this.Seccion = res2[0]
            },
            err => {

            }
          )

        },
        err => {

        }
      )

    }




  }

  ActualizarBarra() {
    var Barra = document.getElementById("Profeso");
    Barra.style.width = "" + this.PorcentajeCurso + "%";

  }

}
