import { Component, OnInit } from '@angular/core';
import { VerCursoService } from "../../servicios/ver-curso.service";
import { ActivatedRoute, Router } from '@angular/router';
import { CrearCursoService } from "../../servicios/crear-curso.service";
import { ListarCursosService } from "../../servicios/listar-cursos.service";

@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrls: ['./info-curso.component.scss']
})
export class InfoCursoComponent implements OnInit {

  Curso = {
    Descripcion: "El mejor lenguaje de todos I",
    LinkImagen: "https://club99.s3.us-east-2.amazonaws.com/ImagenesCursos/online-course.png",
    Nombre: "Angular",
    Valoracion: 5,
    idCurso: 1,
    idEstadoCurso: 1,
    idProfesor: 1
  }

  NombresFiltro: [{
    Nombre: "Donador Nivel 2"
  }];


  SeccionesCurso = [
    {
      Nombre: "NombreSeccion1",
      Numero: 1,

    },
    {
      Nombre: "NombreSeccion2",
      Numero: 2,

    },
    {
      Nombre: "NombreSeccion3",
      Numero: 3,

    }
  ]

  Profesor = {
    Apellidos: "Rodriguez",
    LinkImagenProfesor: "",
    Nombres: "Ronaldo",
    biografia: "",
    idProfesorCurso: 0,
    idUsuario: 0,
  }

  Logueado = true;
  TokenLogin;
  idCurso;

  FiltroCursoExclusivos = [];
  FiltroCursoEtnicos = [];

  constructor(private VerCursoService: VerCursoService, private ActivatedRoute: ActivatedRoute,
    private Router: Router, private CrearCursoService: CrearCursoService,private ListarCursosService: ListarCursosService ) { }

  ngOnInit(): void {


    this.ValidarYObtenerCursoUsuario();

  }
  ValidarYObtenerCursoUsuario() {
    this.TokenLogin = localStorage.getItem('TokenLogin');
    this.idCurso = this.ActivatedRoute.snapshot.params.idCurso;

    if (this.idCurso != null) {

      this.VerCursoService.ObtenerInfoCursoUsuario(this.TokenLogin, this.idCurso).subscribe(
        res => {

   

          this.Curso = res.Curso;
          this.BuscarFiltros();
          if(res.Estado == "Fallo"){
            this.Logueado = false;
          }else{
            this.Logueado = true;
          }

          this.CrearCursoService.GetListSeccioness(this.idCurso).subscribe(
            res2 => {
              this.SeccionesCurso = res2;



            },
            err => {

            }
          )

          this.VerCursoService.ObtenerProfesorCurso(this.idCurso).subscribe(
            res => {

              this.Profesor = res;


            },
            err => {

            }
          )


        },
        err => {

          alert("Curso no asignado");

          this.Router.navigateByUrl('/Mis Cursos');

        }
      )

    } else {
      alert("Error Al buscar curso");
      this.Router.navigateByUrl('/Inicio');
    }
  }

  BuscarFiltros(){
    this.BuscarFiltrosExclusivos()
  }

  BuscarFiltrosExclusivos(){



        this.ListarCursosService.ConsultFiltros(this.Curso).
          subscribe(
            res3 => {

              
                console.log(res3);

              var FiltrosCurso = res3;
              var Nombres = [];
              FiltrosCurso.forEach(element2 => {

                this.ListarCursosService.ConsultFiltroNombre(element2).
                  subscribe(
                    res4 => {

                      if(element2.idTipoFiltro == 3){

                        this.FiltroCursoExclusivos.push({
                          idTipoExclusividad: element2.idFiltro,
                          Nombre: res4.Nombre
                        })

                      }else  if(element2.idTipoFiltro == 2){

                        this.FiltroCursoEtnicos.push({
                          idClasificacionEtnica: element2.idFiltro,
                          Nombre: res4.Nombre
                        })

                      }


                    
                    });

                    console.log(this.FiltroCursoExclusivos);
                    console.log(this.FiltroCursoEtnicos);
                  
              });







            });



      
    

  }
  


  
}
