import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrls: ['./info-curso.component.scss']
})
export class InfoCursoComponent implements OnInit {

  Curso = {
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
  }

  SeccionesCurso =[
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

  Logueado = true;


  constructor() { }

  ngOnInit(): void {



    
  }

}
