import { Component, OnInit } from '@angular/core';
import { ListasFormulariosService } from "../../servicios/listas-formularios.service";
import { JWTService } from "../../servicios/jwt.service";

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



  constructor(private ListasFormulariosService: ListasFormulariosService,private JWTService : JWTService) { }

  ngOnInit() {


    this.ValidarUsuario();
   


  }

  ListarFuncionesTipoUsuario(IntIdUsuario) {

    this.ListasFormulariosService.GetListaFuncionTipoUsuario(IntIdUsuario).subscribe(
      res => {
        this.ListFuncionTipoUsuarios = res;
      },
      err => {
      }

    )
  }
  ValidarUsuario(){

    var TokenLogin = localStorage.getItem('TokenLogin');
    console.log(TokenLogin);

    this.JWTService.PostValidarLoginBarraSuperior(TokenLogin).subscribe(
      res=>{

        if(res.Estado == "Correcto"){
          this.ListarFuncionesTipoUsuario(res.idTipoUsuario);

        }else{
          this.ListarFuncionesTipoUsuario(1);
        }

      },err =>{

      }
    )

    
  }

  CerrarSesion(){
    alert("Se Cerro La Sesion");
    localStorage.removeItem('TokenLogin');
  }


}
