import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ListasFormulariosService } from "../../servicios/listas-formularios.service";
import { RegistrarService } from "../../servicios/registrar.service";


@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.scss']
})

export class EditarperfilComponent implements OnInit {


  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

  private namePattern: any = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
  private docPattern: any = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/
  private passPatternUpper: any = /(.*)[A-Z]+(.*)/
  private passPatternNumber: any = /.*\d+.*/

  Nombres = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
  Apellidos = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
  Telefono = new FormControl('', [Validators.required, Validators.pattern(this.passPatternNumber)]);
  FechaNacimiento = new FormControl('', Validators.required);
  TipoSeguridadSocial = new FormControl('', Validators.required);
  DescripcionSeguridadSocial = new FormControl('', Validators.required);
  TipoIdentifiacion = new FormControl('', Validators.required);
  TipoEtnia = new FormControl('', Validators.required);
  Identificacion = new FormControl('', [Validators.required, Validators.pattern(this.docPattern)]);
  TipoProfesion = new FormControl('', Validators.required);
  Contrasena = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPatternNumber), Validators.pattern(this.passPatternUpper)]);


  
  Correo = new FormControl('', [Validators.required, Validators.email]);
  TipoExclusividad = new FormControl('', Validators.required);
  TipoPromotor = new FormControl('', Validators.required);
  TipoEstadoValidacion = new FormControl('', Validators.required);
  Pais = new FormControl('', Validators.required);
  Departamento = new FormControl('', Validators.required);
  Ciudad = new FormControl('', Validators.required);
  Direccion = new FormControl('', Validators.required);
  Genero = new FormControl('', Validators.required);
  NiveleAcademicos = new FormControl('', Validators.required);
  TipoUsuario = new FormControl('', Validators.required);

  hide = true;
  TiposIdentificacion = [];
  TipoProfesiones = [];
  TiposSeguridadSocial = [];
  TiposEtnia = [];
  TiposGeneros = [];
  TiposExclusividad = [];
  TiposPromotor = [];
  TiposEstadoValidacion = [];
  NivelesAcademicos = [];
  Paises = [];
  Departamentos = [];
  Ciudades = [];
  TiposUsuario = [];

  Usuario;
  UbicacionUsuario;
  SeguridadSocialUsuario;
  ExclusividadUsuario;



  constructor(private ListasFormulariosService  : ListasFormulariosService,
              private RegistrarService : RegistrarService) { }

  ngOnInit(): void {
    this.LlenasCampos();
    this.RellenarUsuario();
  }

  LlenasCampos() {

    this.ListasFormulariosService.GetListatipoidentificacion().subscribe(
      res => {
        this.TiposIdentificacion = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaProfesion().subscribe(
      res => {
        this.TipoProfesiones = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaSeguridadSocial().subscribe(
      res => {
        this.TiposSeguridadSocial = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaClasificacionEtnica().subscribe(
      res => {
        this.TiposEtnia = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaGeneros().subscribe(
      res => {
        this.TiposGeneros = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaExclusividad().subscribe(
      res => {
        this.TiposExclusividad = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaPromotor().subscribe(
      res => {
        this.TiposPromotor = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaEstadoValidacion().subscribe(
      res => {
        this.TiposEstadoValidacion = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaNivelAcademico().subscribe(
      res => {
        this.NivelesAcademicos = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaPaises().subscribe(
      res => {
        this.Paises = res;
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetListaTiposUsuarios().subscribe(
      res => {
        this.TiposUsuario = res;
      },
      err => {

      }
    )


  }
  llenarDatosUsuario(idUsuario) {



    this.ListasFormulariosService.GetUsaurio(idUsuario).subscribe(
      res => {
        this.Usuario = res;
        this.Nombres.setValue(res.Nombres);
        this.Apellidos.setValue(res.Apellidos);
        this.FechaNacimiento.setValue(res.FechaNacimiento);
        this.Identificacion.setValue(res.NumeroIdentificacion);
        this.TipoProfesion.setValue(res.idProfesion);
        this.Telefono.setValue(res.Telefono);
        this.TipoEtnia.setValue(res.idClasificacionEtnica);
        this.Genero.setValue(res.idTipoGenero);
        this.Correo.setValue(res.CorreoElectronico);
        this.TipoEstadoValidacion.setValue(res.idEstadoValidacion);
        this.NiveleAcademicos.setValue(res.idNivelAcademico);
        this.TipoUsuario.setValue(res.idTipoUsuario);
        this.TipoPromotor.setValue(res.idTipoPromotor);
        this.TipoIdentifiacion.setValue(res.idTipoIdentificacion);

      },
      err => {

      }
    );

    this.ListasFormulariosService.GetUsaurioUbicacion(idUsuario).subscribe(
      res => {
        this.UbicacionUsuario = res;
        this.Direccion.setValue(res.Direccion);
        this.Pais.setValue(res.idPais);

        this.ListasFormulariosService.GetListaDepartamentos(this.UbicacionUsuario.idPais).subscribe(
          res2 => {

            this.Departamentos = res2;
            this.Departamento.setValue(this.UbicacionUsuario.idDepartamento);

            console.log(res2);

            this.ListasFormulariosService.GetListaCiudades(this.UbicacionUsuario.idDepartamento).subscribe(
              res3 => {


                this.Ciudades = res3;
                this.Ciudad.setValue(this.UbicacionUsuario.idCiudad);


              },
              err => {
                this.Ciudades = [];
              }
            )

          },
          err => {
            this.Departamentos = [];
          }
        )


      },
      err => {

      }
    );

    this.ListasFormulariosService.GetUsaurioSeguridadSocial(idUsuario).subscribe(
      res => {
        this.SeguridadSocialUsuario = res;
        this.TipoSeguridadSocial.setValue(res.idTipoSeguridadSocial);
        this.DescripcionSeguridadSocial.setValue(res.Descripcion);
      },
      err => {

      }
    )

    this.ListasFormulariosService.GetUsaurioExclusividad(idUsuario).subscribe(
      res => {
        this.ExclusividadUsuario = res;
        this.TipoExclusividad.setValue(res.idTipoExclusividad);
      },
      err => {

      }
    )

  }
  RellenarUsuario(){

    var TokenLogin = localStorage.getItem('TokenLogin');



    this.ListasFormulariosService.GetIdUsuario(TokenLogin).subscribe(
      res=>{
        
        var idUsuario = res.idUsuario;
        
        this.llenarDatosUsuario(idUsuario);

      }
    )

  }
  getErrorMessageCorreo() {
    if (this.Correo.hasError('required')) {
      return 'Ingrese un correo electronico';
    }

    return this.Correo.hasError('email') ? 'Correo No Valido' : '';
  }
  getErrorMessageContrasena() {
    if (this.Contrasena.errors.minlength) {
      return 'La contraseña debe de tener 8 Caracteres';
    } else if (this.Contrasena.errors.pattern) {
      if (this.Contrasena.errors.pattern.requiredPattern == this.passPatternUpper) {
        return 'La contraseña debe de tener contener 1 Mayuscula';
      } else if (this.Contrasena.errors.pattern.requiredPattern == this.passPatternNumber) {
        return 'La contraseña debe de tener contener 1 Numero';
      }
    }
  }
  getErrorMessageNombre() {
    if (this.Nombres.hasError('required')) {
      return 'Ingrese una Nombre';
    } else if (this.Nombres.errors.pattern) {
      return 'El nombre no acepta caracteres especiales';
    }

  }
  getErrorMessageApellido() {
    if (this.Apellidos.hasError('required')) {
      return 'Ingrese una Apellido';
    } else if (this.Apellidos.errors.pattern) {
      return 'El Apellido no acepta caracteres especiales';
    }

  }
  getErrorMessageIdentificacion() {
    if (this.Identificacion.hasError('required')) {
      return 'Ingrese una identificacion';
    } else if (this.Identificacion.errors.pattern) {
      return 'Ingrese una identificacion valida';
    }

  }
  getErrorMessageTelefono() {
    if (this.Telefono.hasError('required')) {
      return 'Ingrese un telefono';
    } else if (this.Telefono.errors.pattern) {
      return 'El telefono solo acepta numeros';
    }

  }
  ActualizarInfo1(){
    
  }
  ActualizarInfo2(){

  }
  ActualizarDepartamentos() {
    console.log("Hola");
    this.ListasFormulariosService.GetListaDepartamentos(this.Pais.value).subscribe(
      res => {

        this.Departamentos = res;
        this.Departamento.setValue(null);
        this.Ciudades = [];
        this.Ciudad.setValue(null);

      },
      err => {

      }
    )

  }
  ActualizarCiudades() {
    console.log("Hola");
    this.ListasFormulariosService.GetListaCiudades(this.Departamento.value).subscribe(
      res => {

        this.Ciudades = res;
        this.Ciudad.setValue(null);

      },
      err => {

      }
    )

  }
  ActualizarContrasena(){

    if(this.Contrasena.valid){
      this.RegistrarService.PostActualizarUsuarioContrasena({
        Contrasena : this.Contrasena.value,
        idUsuario: this.Usuario.idUsuario
      }).subscribe(
        res=>{
          console.log(res);
          alert("Contraseña Cambiada");

        },
        err=>{

        }
      )
    }


  }


}
