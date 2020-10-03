import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerCursoService } from "../../servicios/ver-curso.service";
import { CrearCursoService } from "../../servicios/crear-curso.service";
import { FormControl, Validators } from '@angular/forms';
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
    Apellidos: "",
    LinkImagenProfesor: "",
    Nombres: "",
    biografia: "",
    idProfesorCurso: 0,
    idUsuario: 0,
  }

  PreguntasSeccion=[

  ]
  Pregunta = new FormControl('', Validators.required);

  

  ListaCursosProfesor = [];
  ListaExperienciaProfesor = [];
  idCurso;
  TokenLogin;

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router,
    private VerCursoService: VerCursoService, private CrearCursoService: CrearCursoService) { }

  ngOnInit(): void {

    this.ValidarYObtenerCursoUsuario();



  }
  ValidarYObtenerCursoUsuario() {
    this.TokenLogin = localStorage.getItem('TokenLogin');
    this.idCurso = this.ActivatedRoute.snapshot.params.idCurso;

    if (this.idCurso != null) {

      this.VerCursoService.ObtenerCursoUsuario(this.TokenLogin, this.idCurso).subscribe(
        res => {
          this.Curso = res[0];


          this.CrearCursoService.GetListSeccioness(this.idCurso).subscribe(
            res2 => {
              this.Secciones = res2;
              this.Seccion = res2[0]
              this.ObtenerPreguntas(this.Seccion.idSeccionCurso);

            },
            err => {

            }
          )

            this.VerCursoService.ObtenerProfesorCurso(this.idCurso).subscribe(
              res=>{

                this.Profesor = res;
             

              },
              err=>{

              }
            )


        },
        err => {

            alert("Curso no asignado");
      
            this.Router.navigateByUrl('/Mis Cursos');
         
        }
      )

    }
  }
  ActualizarBarra() {
    var Barra = document.getElementById("Profeso");
    Barra.style.width = "" + this.PorcentajeCurso + "%";

  }
  VerPerfilProfesor(){
  }
  ObtenerPreguntas(idSeccion){
    this.VerCursoService.ObtenerPreguntasCurso({idSeccionCurso:idSeccion}).subscribe(
      res=>{
        this.PreguntasSeccion = res;
        console.log(res);
      },
      err=>{

      }

    )
  }

  CrearPregunta(){
this.VerCursoService.CrearPreguntasCurso(
    {
      idPreguntasSeccion:null,
      Pregunta: this.Pregunta.value ,
      Respuesta:"",
      idSeccionCurso: this.Seccion.idSeccionCurso,
      TokenLogin:this.TokenLogin
    }).subscribe(
      res=>{ 

        console.log("Hola");

      },
      err=>{

      }
    )

  }


}
