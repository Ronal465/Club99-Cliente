import { Component, OnInit } from '@angular/core';

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

  public vistaRecuperarContrasena = false;
  public vistaLogin = true;
  public contrasena = 'fada';
  public contrasenaVisible = true;

  constructor() { }

  ngOnInit() {
  }

  mostrarVistaRecuperarContrasena() {
    this.vistaRecuperarContrasena = true;
    this.vistaLogin = false;
  }


  // LlenarListas(){

  // }

  // Loguearse(){

  // }

  // Registrarse(){

  // }

}
