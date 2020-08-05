import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  // Expresión regular para validacion del email
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Formulario Login
  loginForm = new FormGroup({
    CorreoElectronico: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    Contrasena: new FormControl('', [Validators.required])
  });

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  // Validacion del campo Correo Electronico
  validarCorreoElectronico() {
    const CorreoElectronico = document.getElementById('CorreoElectronico');
    const errorCorreoElectronico = document.getElementById('erroresCorreoElectronico');
    if (this.CorreoElectronico.errors != null) {
      if (this.CorreoElectronico.errors.required) {
        CorreoElectronico.className = 'form-control is-invalid';
        errorCorreoElectronico.innerHTML = 'Este campo es requerido';
      }else if (this.CorreoElectronico.errors.pattern) {
        CorreoElectronico.className = 'form-control is-invalid';
        errorCorreoElectronico.innerHTML = 'Este campo debe ser de tipo email';
      }
    }else {
      CorreoElectronico.className = 'form-control is-valid';
    }
  }

  // Validacion del campo contraseña
  validarContrasena() {
    const Contrasena = document.getElementById('Contrasena');
    const errorContrasena = document.getElementById('erroresContrasena');
    if (this.Contrasena.errors != null) {
      if (this.Contrasena.errors.required) {
        Contrasena.className = 'form-control is-invalid';
        errorContrasena.innerHTML = 'Este campo es requerido';
      }
    }else {
      Contrasena.className = 'form-control is-valid';
    }
  }

  // Ingresar al sistema
  Loguearse() {
    if (this.loginForm.valid) {
      // this.loginService.PostLoguearse(this.loginForm.value)
      // .subscribe(
        // res => {
        //   alert(res.Estado);
        // }, err => {
        //   alert(err);
        // }
      // );
      console.log('Valido');
    }else{

      console.log('No valido');
    }
  }

  // Valores del formulario login
  get CorreoElectronico() { return this.loginForm.get('CorreoElectronico'); }
  get Contrasena() { return this.loginForm.get('Contrasena'); }
}
