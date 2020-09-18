import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { RegistrarService } from "../../servicios/registrar.service";
import { ValidacionesService } from "../../servicios/validaciones.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss', '../login/login.component.scss']
})
export class RecuperarContrasenaComponent implements OnInit {

  Opcion = 1;
  BotonodesEnviar  =1;
  TokenRecupear ="";

  // Expresión regular para validacion del email
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passPatternUpper: any = /(.*)[A-Z]+(.*)/
  private passPatternNumber: any = /.*\d+.*/

  ChangeForm = new FormGroup({

    nuevaContraseña: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPatternNumber), Validators.pattern(this.passPatternUpper)]),

  });
  // Formulario recuperar contraseña
  recuperarContrasenaForm = new FormGroup({
    CorreoElectronico: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
  });

  constructor(private RegistrarService: RegistrarService, private ValidacionesService: ValidacionesService,
              private ActivatedRoute:ActivatedRoute ,private Router :Router) { }

  ngOnInit(): void {

    if(this.ActivatedRoute.snapshot.params.TokenRecuperar != null){

      this.RegistrarService.PostValidacionTokenRecuperar({TokenRecuperar : this.ActivatedRoute.snapshot.params.TokenRecuperar}).subscribe(
        res=>{

          if(res.Estado == "Correcto"){
            this.Opcion = 2;
            this.TokenRecupear =this.ActivatedRoute.snapshot.params.TokenRecuperar ;
          }else{
            alert("Fallo De Link");
            this.Router.navigateByUrl('/Inicio');
          }
        },
        err =>{
          alert("Fallo De Link");
          this.Router.navigateByUrl('/Inicio');
        }
      
      )

      
    }
  }

  // Validacion del campo Correo Electronico
   validarCorreoElectronico() {
    const CorreoElectronico = document.getElementById('CorreoElectronico');
    const errorCorreoElectronico = document.getElementById('erroresCorreoElectronico');
    
    if (this.CorreoElectronico.errors != null) {
      if (this.CorreoElectronico.errors.required) {
        CorreoElectronico.className = 'form-control is-invalid';
        errorCorreoElectronico.innerHTML = 'Este campo es requerido';
        
      
      } else if (this.CorreoElectronico.errors.pattern) {
        CorreoElectronico.className = 'form-control is-invalid';
        errorCorreoElectronico.innerHTML = 'Este campo debe ser de tipo email';
     
      }
      return false;
    } else {
      CorreoElectronico.className = 'form-control is-valid';
    return true;
    }
   
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
      } else {
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
      
      this.RegistrarService.PostCambiarContraseña({TokenRecuperar: this.TokenRecupear, Contrasena: this.nuevaContraseña.value }).subscribe(
        res=>{
          alert("Cotraseña Cambiada");
          this.Router.navigateByUrl('/Login');
        },
        err=>{
          alert("Error CambirContraseña");
        
          console.log({TokenRecuperar: this.TokenRecupear, Contrasena: this.nuevaContraseña })
        }
      )
      
    } else {

      alert("Error CambirContraseña");
      console.log({TokenRecuperar: this.TokenRecupear, Contrasena: this.nuevaContraseña })

    }
  }

  MandarCorreo() {

    

    if (this.validarCorreoElectronico()) {
      const CorreoElectronico = document.getElementById('CorreoElectronico');
      const errorCorreoElectronico = document.getElementById('erroresCorreoElectronico');

      this.ValidacionesService.PostValidacionCorreo({ CorreoElectronico: this.CorreoElectronico.value }).subscribe(
        res => {
          if (res.Estado == "Correcto") {
            CorreoElectronico.className = 'form-control is-invalid';
            errorCorreoElectronico.innerHTML = 'Correo electroico No registrado ';

          } else {
            
            CorreoElectronico.className = 'form-control is-valid';
            this.RegistrarService.PostMandarCorreoRecuperar({CorreoElectronico :this.CorreoElectronico.value}).subscribe(
              res => {
      
                if(res.Estado = "Correcto"){
                  
                  var Mensaje = document.getElementById("MensajeRecuperar");
                  Mensaje.innerHTML = 'Su Correo Ah sido enviado Exitosamente ';
                  this.BotonodesEnviar = 2;

                }
      
              },
              err => {
                CorreoElectronico.className = 'form-control is-invalid';
                errorCorreoElectronico.innerHTML = 'Correo electroico No registrado ';
              }
            );
 
          }
        },
        err => {
          CorreoElectronico.className = 'form-control is-invalid';
          errorCorreoElectronico.innerHTML = 'Correo electroico No registrado ';
        });


    }
  }
  get nuevaContraseña() { return this.ChangeForm.get('nuevaContraseña'); }
  // Valores del formulario recuperar contraseña
  get CorreoElectronico() { return this.recuperarContrasenaForm.get('CorreoElectronico'); }

}
