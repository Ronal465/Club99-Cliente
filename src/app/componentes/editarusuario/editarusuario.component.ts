
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CrearCursoService } from "../../servicios/crear-curso.service";
import { FormControl, Validators } from '@angular/forms';
import { ListasFormulariosService } from "../../servicios/listas-formularios.service";
import { RegistrarService } from "../../servicios/registrar.service";

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss']
})
export class EditarusuarioComponent implements OnInit {

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
  Contrasena = new FormControl('', [Validators.minLength(8), Validators.pattern(this.passPatternNumber), Validators.pattern(this.passPatternUpper)]);
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


  //Profesor
  Biografia = new FormControl('', Validators.required);
  ValidarIP = true;
  LinkImagenProfesor = "";
  ExperieciaProfesor = [];
  DesExperienciaP = new FormControl('', Validators.required);


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







  constructor(private ListasFormulariosService: ListasFormulariosService, private CrearCursoService: CrearCursoService
    , private RegistrarService: RegistrarService) { }

  ngOnInit(): void {

    this.LlenasCampos();
    this.llenarDatosUsuario();
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
  llenarDatosUsuario() {

    var idUsuario = 2;

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
  uploadimg(file) {
    const formData = new FormData();
    formData.append('img', file.data);
    file.inProgress = true;
    this.CrearCursoService.SubirimgProfesor(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          this.LinkImagenProfesor = event.body.link;
          this.ValidarIP = true;
        }
      });
  }
  onClickimg() {
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFilesimg();
    };
    fileUpload.click();
  }
  uploadFilesimg() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadimg(file);
    });

  }
  EliminarExp(Exp) {

    var index = this.ExperieciaProfesor.indexOf(Exp);
    if (index > -1) {
      this.ExperieciaProfesor.splice(index, 1);
    }


  }
  AgregarExperencia() {

    this.DesExperienciaP.markAsTouched();
    if (!this.DesExperienciaP.invalid) {
      this.ExperieciaProfesor.push(
        {
          idExperienciaProfesor: null,
          Nombre: this.DesExperienciaP.value,
          idProfesorCurso: this.Usuario.idUsuario
        }

      );
    }




  }
  ActualizarTipoUsuario() {

    this.DesExperienciaP.markAsTouched();
    this.Biografia.markAsTouched();

    if (this.LinkImagenProfesor == "") {
      this.ValidarIP = false;
    } else {
      this.ValidarIP = true;
    }


    if (this.TipoUsuario.value == 3) {
      if (this.ExperieciaProfesor.length != 0) {

        if (this.ValidarIP && !this.Biografia.invalid) {

          this.RegistrarService.PostCrearProfesor({
            idProfesorCurso: null,
            idUsuario: this.Usuario.idUsuario,
            biografia: this.Biografia.value,
            LinkImagenProfesor: this.LinkImagenProfesor
          }).subscribe(
            res => {
              alert("Profesor Creado");
            },
            err => {

            }
          );

          this.RegistrarService.PostExperienciaProfesor(this.ExperieciaProfesor).subscribe(
            res => {
              alert("Experiencias Creadas Creado");
            },
            err => {

            }
          );


          this.RegistrarService.PostActualizarUsuario({
            idUsuario: this.Usuario.idUsuario,
            idTipoUsuario: this.TipoUsuario.value
          }).subscribe(
            res => {
              alert("Correctamente Editado");
            },
            err => {

            }
          );

        }

      } else {
        this.DesExperienciaP.setValue(null);
        this.DesExperienciaP.markAsTouched();
      }
    } else {
      this.RegistrarService.PostActualizarUsuario({
        idUsuario: this.Usuario.idUsuario,
        idTipoUsuario: this.TipoUsuario.value
      }).subscribe(
        res => {
          alert("Correctamente Editado");
        },
        err => {

        }
      );
    }




  }
  ActualizarInfo1() {
    this.Nombres.markAsTouched();
    this.Apellidos.markAsTouched();
    this.FechaNacimiento.markAsTouched();
    this.TipoIdentifiacion.markAsTouched();
    this.Identificacion.markAsTouched();
    this.TipoProfesion.markAsTouched();
    this.Telefono.markAsTouched();
    this.TipoSeguridadSocial.markAsTouched();
    this.DescripcionSeguridadSocial.markAsTouched();
    this.TipoEtnia.markAsTouched();

    if (this.Nombres.valid && this.Apellidos.valid && this.FechaNacimiento.valid && this.TipoIdentifiacion.valid &&
      this.Identificacion.valid && this.TipoProfesion.valid && this.Telefono.valid && this.TipoSeguridadSocial.valid &&
      this.DescripcionSeguridadSocial.valid && this.TipoEtnia.valid) {

      this.RegistrarService.PostActualizarUsuario({
        idUsuario: this.Usuario.idUsuario,
        Nombres: this.Nombres.value,
        FechaNacimiento: this.FechaNacimiento.value.slice(0, 10),
        idTipoIdentificacion: this.TipoIdentifiacion.value,
        NumeroIdentificacion: this.Identificacion.value,
        idProfesion: this.TipoProfesion.value,
        Telefono: this.Telefono.value,
        idClasificacionEtnica: this.TipoEtnia.value,
      }).subscribe(
        res => {
          alert("Correctamente Editado");
        },
        err => {

        }
      );

      this.RegistrarService.PostActualizarUsuarioSeguridadSocial(
        {
          idTipoSeguridadSocial: this.TipoSeguridadSocial.value,
          Descripcion: this.DescripcionSeguridadSocial.value,
          idUsuario: this.Usuario.idUsuario
        }).subscribe(
          res => {
            alert("Correctamente Editado");
          },
          err => {

          }
        );




    }



  }
  ActualizarInfo2() {
    this.Genero.markAsTouched();


    this.Correo.markAsTouched();
    this.TipoExclusividad.markAsTouched();

    this.TipoPromotor.markAsTouched();
    this.TipoEstadoValidacion.markAsTouched();
    this.NiveleAcademicos.markAsTouched();
    this.Pais.markAsTouched();
    this.Departamento.markAsTouched();
    this.Ciudad.markAsTouched();
    this.Direccion.markAsTouched();

    if (this.Genero.valid && this.Correo.valid && this.TipoExclusividad.valid &&
      this.TipoPromotor.valid && this.TipoEstadoValidacion.valid && this.NiveleAcademicos.valid && this.Pais.valid &&
      this.Departamento.valid && this.Ciudad.valid && this.Direccion.valid) {

      this.RegistrarService.PostActualizarUsuarioExclusividad({
        idTipoExclusividad: this.TipoExclusividad.value,
        idUsuario: this.Usuario.idUsuario
      }).subscribe(
        res => {
          alert("Actualizado correctamente");
        },
        err => {

        }
      );
      this.RegistrarService.PostActualizarUsuario({
        idUsuario: this.Usuario.idUsuario,
        idTipoGenero: this.Genero.value,
        CorreoElectronico: this.Correo.value,
        idTipoPromotor: this.TipoPromotor.value,
        idEstadoValidacion: this.TipoEstadoValidacion.value,
        idNivelAcademico: this.NiveleAcademicos.value,
        Telefono: this.Telefono.value
      }).subscribe(
        res => {
          alert("Correctamente Editado");
        },
        err => {

        }
      );
      this.RegistrarService.PostActualizarUsuarioUbicacion({
        idUsuario: this.Usuario.idUsuario,
        idPais: this.Pais.value,
        idCiudad: this.Ciudad.value,
        idDepartamento: this.Departamento.value,
        Direccion: this.Direccion.value

      }).subscribe(
        res => {
          alert("Correctamente Editado");
        },
        err => {

        }
      );



    }


  }


}
