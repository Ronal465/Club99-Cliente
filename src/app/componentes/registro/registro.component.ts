import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListasFormulariosService } from "../../servicios/listas-formularios.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
// '../login/login.component.scss'
export class RegistroComponent implements OnInit {

  public steps = 1;

  private namePattern: any = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
  private docPattern: any = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passPatternUpper: any = /(.*)[A-Z]+(.*)/
  private passPatternNumber: any = /.*\d+.*/

  TiposDocumento = [];
  Paises = [];
  Departamentos = [];
  Ciudades = [];
  TiposPoblacion = [];
  CondicionesSocial = [];
  NivelAcademicos = [];
  Profesiones = [];


  RegisterForm = new FormGroup({

    Nombres: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
    Apellidos: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
    Doc: new FormControl('', [Validators.required, Validators.pattern(this.docPattern)]),
    CorreoElectronico: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    Contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPatternNumber), Validators.pattern(this.passPatternUpper)]),
    TipoDocumento: new FormControl(null, Validators.required),

    //Ubicacion
    PaisResidencia: new FormControl(null, Validators.required),
    Departamento: new FormControl(null, Validators.required),
    Ciudad: new FormControl(null, Validators.required),

    //Direccion
    TipoPoblacion: new FormControl(null, Validators.required),
    CondicionSocial: new FormControl(null, Validators.required),
    DescripcionCondicion: new FormControl(null, Validators.required),

    //Academico
    NivelAcademico: new FormControl(null, Validators.required),
    Profesion: new FormControl(null, Validators.required)
  });



  constructor(private loginService: LoginService, private ListasFormulariosService: ListasFormulariosService) { }

  ngOnInit(): void {

    this.RellenarFormuarios(1, 0);
    this.RellenarFormuarios(2, 0);
    this.RellenarFormuarios(5, 0);
    this.RellenarFormuarios(6, 0);
    this.RellenarFormuarios(7, 0);
    this.RellenarFormuarios(8, 0);
  }

  RellenarFormuarios(Numero, index) {

    if (Numero == 1) {
      this.ListasFormulariosService.GetListatipoidentificacion().subscribe(
        res => {
          this.TiposDocumento = res;
        },
        err => {

        }
      );

    } else if (Numero == 2) {
      this.ListasFormulariosService.GetListaPaises().subscribe(
        res => {
          this.Paises = res;
        },
        err => {
          this.Paises = [];
        }
      )
    } else if (Numero == 3) {
      this.ListasFormulariosService.GetListaDepartamentos(index).subscribe(
        res => {
          this.Departamentos = res;
        },
        err => {
          this.Departamentos = [];
        }
      )
    } else if (Numero == 4) {
      this.ListasFormulariosService.GetListaCiudades(index).subscribe(
        res => {
          this.Ciudades = res;
        },
        err => {
          this.Ciudades = [];
        }
      )
    } else if (Numero == 5) {
      this.ListasFormulariosService.GetListaClasificacionEtnica().subscribe(
        res => {
          this.TiposPoblacion = res;
        },
        err => {
          this.TiposPoblacion = [];
        }
      )
    } else if (Numero == 6) {
      this.ListasFormulariosService.GetListaSeguridadSocial().subscribe(
        res => {
          this.CondicionesSocial = res;
        },
        err => {
          this.CondicionesSocial = [];
        }
      )
    }else if (Numero == 7) {
      this.ListasFormulariosService.GetListaNivelAcademico().subscribe(
        res => {
          this.NivelAcademicos = res;

        },
        err => {
          this.NivelAcademicos = [];
        }
      )
    }else if (Numero == 8) {
      this.ListasFormulariosService.GetListaProfesion().subscribe(
        res => {
          this.Profesiones = res;
        },
        err => {
          this.Profesiones = [];
        }
      )
    }


  }
  // Step 1
  validarName(): boolean {
    const name = document.getElementById('Nombres');
    const errorname = document.getElementById('erroresNombres');

    if (this.Nombres.errors != null) {
      if (this.Nombres.errors.required) {
        console.log('este campo es requrido')
        name.className = 'form-control is-invalid'
        errorname.innerHTML = 'Este campo es requerido'
      } else if (this.Nombres.errors.pattern) {
        name.className = 'form-control is-invalid'
        errorname.innerHTML = 'Este campo no acepta Caracteres Especiales'
      }
      return false;
    } else {
      name.className = 'form-control is-valid';
      return true;
    }
  }

  validarApellidos(): boolean {
    const Apellidos = document.getElementById('Apellidos');
    const errorApellidos = document.getElementById('erroresApellidos');

    if (this.Apellidos.errors != null) {
      if (this.Apellidos.errors.required) {
        Apellidos.className = 'form-control is-invalid'
        errorApellidos.innerHTML = 'Este campo es requerido'
      } else if (this.Nombres.errors.pattern) {
        Apellidos.className = 'form-control is-invalid'
        errorApellidos.innerHTML = 'Este campo no acepta Caracteres Especiales'
      }
      return false;
    } else {
      Apellidos.className = 'form-control is-valid';
      return true;
    }
  }
  
  validarTipoDoc(): boolean {
    const TipoDoc = document.getElementById('TipoDocumento');
    const errorTipodocument = document.getElementById('erroresTipoDocumento');
    if (this.TipoDocumento.errors != null) {
      if (this.TipoDocumento.errors.required) {
        TipoDoc.className = 'form-control is-invalid'
        errorTipodocument.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      TipoDoc.className = 'form-control is-valid';
      return true;
    }
  }
  validarDoc(): boolean {
    const documen = document.getElementById('NumDocumento');
    const errordocument = document.getElementById('erroresDocumento');

    if (this.Doc.errors != null) {
      if (this.Doc.errors.required) {
        console.log('este campo es requrido')
        documen.className = 'form-control is-invalid'
        errordocument.innerHTML = 'Este campo es requerido'
      } else if (this.Doc.errors.pattern) {
        documen.className = 'form-control is-invalid'
        errordocument.innerHTML = 'Debes ingresar un documento valido'
      }
    } else {
      documen.className = 'form-control is-valid';
      return true;
    }
  }
  // Step 2
  validarPais(): boolean {



    const pais = document.getElementById('PaisResidencia');
    const errorpais = document.getElementById('erroresPais');
    if (this.PaisResidencia.errors != null) {
      if (this.PaisResidencia.errors.required) {
        pais.className = 'form-control is-invalid'
        errorpais.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      this.RellenarFormuarios(3, this.PaisResidencia.value);
      pais.className = 'form-control is-valid';
      return true;
    }
  }
  ValidarDepartamento(): boolean {
    const Departamento = document.getElementById('Departamento');
    const errorDepartamento = document.getElementById('erroresDepartamento');
    if (this.Departamento.errors != null) {
      if (this.Departamento.errors.required) {
        Departamento.className = 'form-control is-invalid'
        errorDepartamento.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      this.RellenarFormuarios(4, this.Departamento.value);
      Departamento.className = 'form-control is-valid';
      return true;
    }
  }
  validarCiudad(): boolean {
    const ciudad = document.getElementById('Ciudad');
    const errorciudad = document.getElementById('erroresCiudad');
    if (this.Ciudad.errors != null) {
      if (this.Ciudad.errors.required) {
        ciudad.className = 'form-control is-invalid'
        errorciudad.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      ciudad.className = 'form-control is-valid';
      return true;
    }
  }
  // Step 3
  validarPoblacion(): boolean {
    const tipoPoblacion = document.getElementById('TipoPoblacion');
    const errortipoPoblacion = document.getElementById('erroresTipoPoblacion');
    if (this.TipoPoblacion.errors != null) {
      if (this.TipoPoblacion.errors.required) {
        tipoPoblacion.className = 'form-control is-invalid'
        errortipoPoblacion.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      tipoPoblacion.className = 'form-control is-valid';
      return true;
    }
  }
  validarCondicion(): boolean {
    const condicion = document.getElementById('CondicionSocial');
    const errorcondicion = document.getElementById('erroresCondicion');
    if (this.CondicionSocial.errors != null) {
      if (this.CondicionSocial.errors.required) {
        condicion.className = 'form-control is-invalid'
        errorcondicion.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      condicion.className = 'form-control is-valid';
      return true;
    }
  }
  ValidarDescripcionCondicion(): boolean {
    const DescripcionCondicion = document.getElementById('DescripcionCondicion');
    const ErrorDescripcionCondicion = document.getElementById('erroresDescripcionCondicion');
    if (this.DescripcionCondicion.errors != null) {
      if (this.DescripcionCondicion.errors.required) {
        DescripcionCondicion.className = 'form-control is-invalid'
        ErrorDescripcionCondicion.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      DescripcionCondicion.className = 'form-control is-valid';
      return true;
    }
  }
  // Step 4
  validarNivelAcademico(): boolean {

    const NivelAcademico= document.getElementById('NivelAcademico');
    const errorNivelAcademico = document.getElementById('erroresNivelAcademico');
    if (this.NivelAcademico.errors != null) {
      if (this.NivelAcademico.errors.required) {
        NivelAcademico.className = 'form-control is-invalid'
        errorNivelAcademico.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      NivelAcademico.className = 'form-control is-valid';
      return true;
    }
  }
  validarProfesion(): boolean {

    const Profesion = document.getElementById('Profesion');
    const errorProfesion = document.getElementById('erroresProfesion');
    if (this.Profesion.errors != null) {
      if (this.Profesion.errors.required) {
        Profesion.className = 'form-control is-invalid'
        errorProfesion.innerHTML = 'Este campo es requerido'
      } return false;
    } else {
      Profesion.className = 'form-control is-valid';
      return true;
    }
  }
  // Step 5
  validarEmail(): boolean {
    const Email = document.getElementById('CorreoElectronico');
    const errorEmail = document.getElementById('erroresEmail');

    if (this.CorreoElectronico.errors != null) {
      if (this.CorreoElectronico.errors.required) {
        console.log('este campo es requrido')
        Email.className = 'form-control is-invalid'
        errorEmail.innerHTML = 'Este campo es requerido'
      } else if (this.CorreoElectronico.errors.pattern) {
        Email.className = 'form-control is-invalid'
        errorEmail.innerHTML = 'Ingresa un correo electronico Valido'

      }
      return false;
    } else {
      Email.className = 'form-control is-valid';
      return true;
    }
  }
  validarPass(): boolean {
    const Password = document.getElementById('Pass');
    const errorPass = document.getElementById('erroresPassword');

    if (this.Contrasena.errors != null) {
      if (this.Contrasena.errors.required) {
        console.log('este campo es requrido')
        Password.className = 'form-control is-invalid'
        errorPass.innerHTML = 'Este campo es requerido'
      } else if (this.Contrasena.errors.minlength) {

        Password.className = 'form-control is-invalid'
        errorPass.innerHTML = 'La contraseña debe tener al menos 8 caracteres'
      } else if (this.Contrasena.errors.pattern) {
        if (this.Contrasena.errors.pattern.requiredPattern == this.passPatternUpper) {
          Password.className = 'form-control is-invalid'
          errorPass.innerHTML = 'La contraseña debe tener al menos una mayuscula'
        } else if (this.Contrasena.errors.pattern.requiredPattern == this.passPatternNumber) {
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
    const ConfirmPassword = document.getElementById('confirmPassword');
    const errorPass = document.getElementById('erroresConfirm');
    if (this.Contrasena.errors == null) {
      if (this.Contrasena.value == event.target.value) {
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
  stepsfunction(step): void {
    if (step == 0) {
      if (this.steps == 1) {

      } else {
        this.steps--
      }
    }
    if (step == 1) {
      if (this.steps == 5) {

      } else {
        this.steps++
      }
    }

  }
  continue(step) {
    switch (this.steps) {
      case 1:
        if (this.validarName() &&  this.validarApellidos() && this.validarTipoDoc() && this.validarDoc()) {
          this.stepsfunction(step);
        }
        break;
      case 2:
        if (this.validarPais() && this.ValidarDepartamento() && this.validarCiudad()) {
          this.stepsfunction(step);

        }
        break;

      case 3:
        if (this.validarPoblacion() && this.validarCondicion() && this.ValidarDescripcionCondicion()) {
          this.stepsfunction(step);
        }
        break;

      case 4:
        if (this.validarNivelAcademico() && this.validarProfesion()) {
          this.stepsfunction(step);
        }
        break;


      default:
        break;
    }
  }
  Registrarse() {
    if (this.RegisterForm.valid) {
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
      console.log(this.RegisterForm);
    } else {

      console.log('No valido');
    }
  }
  get Nombres() { return this.RegisterForm.get('Nombres'); }
  get Apellidos() { return this.RegisterForm.get('Apellidos'); }
  get Doc() { return this.RegisterForm.get('Doc'); }
  get CorreoElectronico() { return this.RegisterForm.get('CorreoElectronico'); }
  get Contrasena() { return this.RegisterForm.get('Contrasena'); }
  get TipoDocumento() { return this.RegisterForm.get('TipoDocumento'); }
  get PaisResidencia() { return this.RegisterForm.get('PaisResidencia'); }
  get Ciudad() { return this.RegisterForm.get('Ciudad'); }
  get TipoPoblacion() { return this.RegisterForm.get('TipoPoblacion'); }
  get CondicionSocial() { return this.RegisterForm.get('CondicionSocial'); }
  get Departamento() { return this.RegisterForm.get('Departamento'); }
  get DescripcionCondicion() { return this.RegisterForm.get('DescripcionCondicion'); }
  get NivelAcademico() { return this.RegisterForm.get('NivelAcademico'); }
  get Profesion() { return this.RegisterForm.get('Profesion'); }

}
