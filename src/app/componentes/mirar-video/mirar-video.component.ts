import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirar-video',
  templateUrl: './mirar-video.component.html',
  styleUrls: ['./mirar-video.component.scss']
})
export class MirarVideoComponent implements OnInit {


  Curso: any = [
    {
      idCurso: 0,
      Nombre: "Angular Curso",
      Descripcion: "Descripcion1",
      LinkImagen: "LinkImagen1",
      Valoracion: "Valoracion1"
    },
    {
      idUsuario: 0,
      Nombre: "NombreProfesor1"
    },
    [{
      idTipoFiltro: 0,
      idFiltro: 0,
      Nombre: "nombre Filtro"
    }]
  ];

  PorcentajeCurso: any = 20;

  Seccion = {
    idSeccionCurso: 1,
    Nombre: "Inico Angular",
    LinkMultimedia: "",
    idTipoArchivoMultimedia: 1,
    idCurso: 0,
    Numero: 1,
    Contenido: "Angular es un framework opensource desarrollado por Google para facilitar la creación y programación de aplicaciones web de una sola página, las webs SPA (Single Page Application).Angular separa completamente el frontend y el backend en la aplicación, evita escribir código repetitivo y mantiene todo más ordenado gracias a su patrón MVC (Modelo-Vista-Controlador) asegurando los desarrollos con rapidez, a la vez que posibilita modificaciones y actualizaciones.En una web SPA aunque la velocidad de carga puede resultar un poco lenta la primera vez que se abre, navegar después es totalmente instantáneo, ya que se ha cargado toda la página de golpe."
  }

  Secciones = [
    {
      idSeccionCurso: 1,
      Nombre: "Inicio Angular",
      Numero: 1
    },
    {
      idSeccionCurso: 2,
      Nombre: "Angular Es Dios",
      Numero: 2
    }
  ]

  Profesor={
    idProfesorCurso: 0,
    Nombre: "",
    biografia: "",
    LinkImagenProfesor: "https://www.elcolombiano.com/documents/10157/0/580x387/0c11/580d365/none/11101/PILJ/image_content_36371796_20200915164613.jpg",
  }

  ListaCursosProfesor=[];
  ListaExperienciaProfesor=[];


  constructor() { }

  ngOnInit(): void {
    this.ActualizarBarra();

  }

  ActualizarBarra() {
    var Barra = document.getElementById("Profeso");
    Barra.style.width = "" + this.PorcentajeCurso + "%";

  }

}
