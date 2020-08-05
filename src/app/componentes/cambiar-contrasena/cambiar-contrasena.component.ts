import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss', '../login/login.component.scss']
})
export class CambiarContrasenaComponent implements OnInit {
  private passPatternUpper: any = /(.*)[A-Z]+(.*)/
  private passPatternNumber: any = /.*\d+.*/

  ChangeForm = new FormGroup({

    nuevaContraseña: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPatternNumber), Validators.pattern(this.passPatternUpper)]),

  });
  constructor() { }

  ngOnInit(): void {
  }


  validarPass(): boolean {
    const Password = document.getElementById('nuevaContraseña');
    const errorPass = document.getElementById('erroresPassword');

    if (this.nuevaContraseña.errors != null) {
      if (this.nuevaContraseña.errors.required) {
        console.log('este campo es requrido')
        Password.className = 'form-control is-invalid'
        errorPass.innerHTML = 'Este campo es requerido'
      } else if (this.nuevaContraseña.errors.minlength) {

        Password.className = 'form-control is-invalid'
        errorPass.innerHTML = 'La contraseña debe tener al menos 8 caracteres'
      } else if (this.nuevaContraseña.errors.pattern) {
        if (this.nuevaContraseña.errors.pattern.requiredPattern == this.passPatternUpper) {
          Password.className = 'form-control is-invalid'
          errorPass.innerHTML = 'La contraseña debe tener al menos una mayuscula'
        } else if (this.nuevaContraseña.errors.pattern.requiredPattern == this.passPatternNumber) {
          Password.className = 'form-control is-invalid'
          errorPass.innerHTML = 'La contraseña debe tener al menos un numero'
        }
        return false;
      }
    } else {
      Password.className = 'form-control is-valid';
      return true;
    }
  }

  validarConfirmPass(event: any): boolean {
    const ConfirmPassword = document.getElementById('confirmarContraseña');
    const errorPass = document.getElementById('erroresConfirm');
    if (this.nuevaContraseña.errors == null) {
      if (this.nuevaContraseña.value == event.target.value) {
        console.log('epa Hpta')
        ConfirmPassword.className = 'form-control is-valid';
        return true;
      }else {
        ConfirmPassword.className = 'form-control is-invalid';
        errorPass.innerHTML = 'Las Contraseñas deben coincidir'
        return false;
      }
    } else {
      ConfirmPassword.className = 'form-control is-invalid';
      errorPass.innerHTML = 'Las Contraseñas deben coincidir'
      return false;
    }
  }

  Change() {
    if (this.ChangeForm.valid) {
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
    } else {

      console.log('No valido');
    }
  }

  get nuevaContraseña() { return this.ChangeForm.get('nuevaContraseña'); }
}
