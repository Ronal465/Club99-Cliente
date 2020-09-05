import { Component, OnInit } from '@angular/core';
import { Curso } from "../../Modelos/Curso";
import { ListasFormulariosService } from "../../servicios/listas-formularios.service";
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

JsonBuscarCurso = [
  {
     "TextoBusqueda": ""
  },
  {
    "idProfesion" : 0,
    "idSeguriradSocial" : 0,
    "idClasificacionEtnica" : 0,
    "idTipoGenero": 0,
    "idExclusividad": 0,
    "idNivelAcademico": 0,
    "idTipoUsuario": 0,
    "idUbicacion": 0,
    "idTipoPromotor": 0,
  },
  {
   "TokenLogin": {} 
  } 
  ]
  


  ListaFiltosExclusivos = [
    {
      "idTipoExclusividad": 1,
      "Nombre": "Donador Nivel 1"
    }
  ];
  ListCursos = [

    [
      {
        idCurso: 0,
        Nombre: "Como ser veneco",
        Descripcion: "Los venecos Dominan",
        LinkImagen: "https://pbs.twimg.com/profile_images/905971363567022082/ZbAQNtac_400x400.jpg",
        Valoracion: 5
      },
      {
        idUsuario: 0,
        Nombre: "Ronaldo Rodriguez"
      },
      [{
        idTipoFiltro: 0,
        idFiltro: 0,
        Nombre: "Puteria"
      }, {
        idTipoFiltro: 0,
        idFiltro: 0,
        Nombre: "Zorreria"
      }]
    ],
    [
      {
        idCurso: 0,
        Nombre: "Como ser costeño",
        Descripcion: "Los venecos Dominan",
        LinkImagen: "veeneco.com",
        Valoracion: 5
      },
      {
        idUsuario: 0,
        Nombre: "Ronaldo Carlos"
      },
      [{
        idTipoFiltro: 0,
        idFiltro: 0,
        Nombre: "Puteria"
      }, {
        idTipoFiltro: 0,
        idFiltro: 0,
        Nombre: "Zorreria"
      }]
    ]


  ];
  ListChetboxExcluvios = [];

  Hola;


  Filtros: {

    idProfesion: number;
    idSeguriradSocial: number;
    idClasificacionEtnica: number;
    idTipoGenero: number;
    idExclusividad: number;
    idNivelAcademico: number;
    idTipoUsuario: number;
    idUbicacion: number;
    idTipoPromotor: number;

  } = {
      idProfesion: 0,
      idSeguriradSocial: 0,
      idClasificacionEtnica: 0,
      idTipoGenero: 0,
      idExclusividad: 0,
      idNivelAcademico: 0,
      idTipoUsuario: 0,
      idUbicacion: 0,
      idTipoPromotor: 0,
    }


  constructor(private ListasFormulariosService: ListasFormulariosService) { }

  ngOnInit(): void {

    this.ActualizarFiltros();
  }

  ActualizarFiltros() {

    this.ListasFormulariosService.GetListaExclusividad().subscribe(
      res => {
        
        this.ListaFiltosExclusivos = res;
        this.ListaFiltosExclusivos.forEach((element :any) => {
          this.ListChetboxExcluvios.push({
           Nombre : element.Nombre,
           Valor : false
          });
        });
    
      },
      err => {

      }
    )

     
  }

  BuscarCursos() {

   
  }

  FiltrosExclusivos(StrNombre,Value) {

    this.ListChetboxExcluvios.forEach( (element,index)=>{
      if(element.Nombre == StrNombre){
        this.ListChetboxExcluvios[index].Valor = true;

        this.JsonBuscarCurso[1].idExclusividad = Value;
  
      }else{
        this.ListChetboxExcluvios[index].Valor = false;
      }
    });
    console.log(this.JsonBuscarCurso);
  
  }
 

}
