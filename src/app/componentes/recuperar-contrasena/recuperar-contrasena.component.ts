import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss', '../login/login.component.scss']
})
export class RecuperarContrasenaComponent implements OnInit {

  // Expresión regular para validacion del email
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Formulario recuperar contraseña
  recuperarContrasenaForm = new FormGroup({
    CorreoElectronico: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
  });

  constructor() { }

  ngOnInit(): void {
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

  // Valores del formulario recuperar contraseña
  get CorreoElectronico() { return this.recuperarContrasenaForm.get('CorreoElectronico'); }
}
