import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
   Fecha Ultima Edicion:
   30/07/2020
*/


export class LoginComponent implements OnInit {

  LoginUsuario = {
    CorreoElectronico: '',
    Contrasena: ''
  };

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  LlenarListas() {

  }

  Loguearse() {
    this.loginService.PostLoguearse({
      CorreoElectronico: this.LoginUsuario.CorreoElectronico,
      Contrasena: this.LoginUsuario.Contrasena
    }).subscribe(
      res => {

        alert(res.Estado);

      }, err => {
        alert(err);
      }
    );
  }
  // LlenarListas(){

  // Loguearse(){

  // }

  // Registrarse(){

  // }

}
