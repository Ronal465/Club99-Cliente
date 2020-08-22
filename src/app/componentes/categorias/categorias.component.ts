import { Component, OnInit } from '@angular/core';
import { Curso } from "../../Modelos/Curso";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {


  ListaFiltosExclusivod = [
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
          LinkImagen: "veeneco.com",
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

  constructor() { }

  ngOnInit(): void {

    console.log(this.ListCursos.length);
  }

}
