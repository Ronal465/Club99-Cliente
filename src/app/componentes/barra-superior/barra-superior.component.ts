import { Component, OnInit } from '@angular/core';
import { ListasFormulariosService } from "../../servicios/listas-formularios.service";


@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
   Fecha Ultima Edicion:
   30/07/2020
*/

export class BarraSuperiorComponent implements OnInit {

   ListFuncionTipoUsuarios = [];



  constructor(private ListasFormulariosService: ListasFormulariosService) { }

  ngOnInit() {

    this.ListarFuncionesTipoUsuario(1);


  }

  ListarFuncionesTipoUsuario(IntIdUsuario) {

    this.ListasFormulariosService.GetListaFuncionTipoUsuario(IntIdUsuario).subscribe(
      res => {
        this.ListFuncionTipoUsuarios = res;
        this.ElegirOpcionesNavar();
      },
      err => {

      }

    )
  }
  ElegirOpcionesNavar() {

    this.ListFuncionTipoUsuarios.forEach((element)=>{

      console.log(element);

    })

  }


}
