import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss']
})
export class MisCursosComponent implements OnInit {




   BuscarCurso = new FormControl('', Validators.required);



  ListaCursos = [
    {
      Curso: {
        Descripcion: "El mejor lenguaje de todos I",
        LinkImagen: "https://club99.s3.us-east-2.amazonaws.com/ImagenesCursos/online-course.png",
        Nombre: "Angular",
        Valoracion: 5,
        idCurso: 1,
        idEstadoCurso: 1,
        idProfesor: 1
      },
      NombresFiltro: [{
        Nombre: "Donador Nivel 2"
      }],
      Profesor: {
        Apellidos: "Carlos Rodriguez",
        Nombres: "Ronaldo Carlos",
        idUsuario: 1
      }
    },
    {
      Curso: {
        Descripcion: "El mejor lenguaje de todos I",
        LinkImagen: "https://club99.s3.us-east-2.amazonaws.com/ImagenesCursos/online-course.png",
        Nombre: "Real",
        Valoracion: 5,
        idCurso: 1,
        idEstadoCurso: 1,
        idProfesor: 1
      },
      NombresFiltro: [{
        Nombre: "Donador Nivel 2"
      }],
      Profesor: {
        Apellidos: "Carlos Rodriguez",
        Nombres: "Ronaldo Carlos",
        idUsuario: 1
      }
    }
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
