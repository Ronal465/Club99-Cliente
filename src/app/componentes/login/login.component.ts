import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validaciones } from '../../Validaciones/validaciones';
import { Router } from '@angular/router';

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

  public validaciones = new Validaciones();

  mensajesErrores = {
    CorreoElectronico: '',
    Contrasena: ''
  };

  // Expresión regular para validacion del email
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Formulario Login
  loginForm = new FormGroup({
    CorreoElectronico: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    Contrasena: new FormControl('', [Validators.required])
  });

  constructor(private loginService: LoginService, private Router: Router) { }

  ngOnInit() {



  }

  // Validacion del campo Correo Electronico
  validarCorreoElectronico() {
    this.mensajesErrores.CorreoElectronico = this.validaciones.validarEmail(this.CorreoElectronico);
  }

  // Validacion del campo contraseña
  validarContrasena() {
    this.mensajesErrores.Contrasena = this.validaciones.validarContrasena(this.Contrasena);
  }

  // Ingresar al sistema
  Loguearse() {
    if (this.loginForm.valid) {
      this.loginService.PostLoguearse(this.loginForm.value)
        .subscribe(
          res => {
            this.ValidarLogin(res);
          }, err => {
            alert(err);
          }
        );
      console.log('Valido');
    } else {

      console.log('No valido');
    }
  }

  ValidarLogin(Respuesta) {


    if (Respuesta.Estado == "FalloCorreo") {
      alert("Mal Correo");


    } else if (Respuesta.Estado == "FalloContraseña") {
      alert("Mal contraseña");


    } else if (Respuesta.Estado == "Bloqueado") {
      alert("Bloqueado");


    } else if (Respuesta.Estado == "Correcto") {

      localStorage.clear();
      localStorage.setItem('TokenLogin',"" + Respuesta.TokenLogin);
      alert("Login Correcto");
      this.Router.navigateByUrl('/Inicio');
    
    } 


  }


  // Valores del formulario login
  get CorreoElectronico() { return this.loginForm.get('CorreoElectronico'); }
  get Contrasena() { return this.loginForm.get('Contrasena'); }
}
