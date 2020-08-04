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

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  LoginUsuario = {
    CorreoElectronico: '',
    Contrasena: ''
  };

  loginForm = new FormGroup({
    CorreoElectronico: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    Contraseña: new FormControl('', [Validators.required, Validators.maxLength(8)])
  });

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  LlenarListas() {

  }

  validarCorreoElectronico() {

  }

  Loguearse() {
    if (this.loginForm.valid) {
      // this.loginService.PostLoguearse({
      //   CorreoElectronico: this.LoginUsuario.CorreoElectronico,
      //   Contrasena: this.LoginUsuario.Contrasena
      // });
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

  get CorreoElectronico() { return this.loginForm.get('CorreoElectronico'); }
  get Contraseña() { return this.loginForm.get('Contraseña'); }
}
