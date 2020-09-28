import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CrearCursoService } from "../../servicios/crear-curso.service";
import { FormControl, Validators } from '@angular/forms';
import { JWTService } from "../../servicios/jwt.service";
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})

export class CrearCursoComponent implements OnInit {

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];


  //Seccion
  TipoArchivoM = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  NombreSeccion  = new FormControl('', Validators.required);
  DescripcionSeccion  = new FormControl('', Validators.required);

  //Curso
  NombreCurso = new FormControl('', Validators.required);
  DescripcionCurso = new FormControl('', Validators.required);
  idProfesorCurso  = new FormControl('', Validators.required);
  LinkImagenCurso = "";
  ValidarIC = true;

  TiposMultimedia =[
    {
      idTipoArchivoMultimedia: 1,
      TipoArchivoMultimedia: "Video/mp4",
      Extencion: "mp4"
    },
    {
      idTipoArchivoMultimedia: 2,
      TipoArchivoMultimedia: "Archivo/Pdf",
      Extencion: "pdf"
    },
  ]

  ListaCursosSinTerminar = [];

  Opcion = 0;

  Secciones=[
    {
      idSeccionCurso: 1,
      Nombre : "Introduccion A Angular",
      Numero: 1,
      LinkMultimedia: "",
      idTipoArchivoMultimedia: 1,
      idCurso: 1,
      Contenido: ""
    }
  ]

  Curso ={
    idCurso:null,
    Nombre: "Nombre De Curso",
    Descripcion:"",
    LinkImagen:"",
    idProfesor:0,
    Valoracion:'4.0',
    idEstadoCurso: 1

  }

  SeccionCreate=    {
    idSeccionCurso: null,
    Nombre : "",
    Numero: 0,
    LinkMultimedia: "",
    idTipoArchivoMultimedia: 0,
    idCurso: 0,
    Contenido: ""
  }

  ValidarFC = false;
  LinkSeccion = "";

  TokenProfesor= "";

  constructor(private CrearCursoService: CrearCursoService,private JWTService :JWTService,
              private Router : Router , private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.ValidarProfesor();
    
    if(this.Opcion == 0){
      this.CursosSinTerinar();
    }

  }
  CursosSinTerinar(){
    this.CrearCursoService.GetListCursos().subscribe(
      res=>{
        this.ListaCursosSinTerminar = res;
        console.log(res);
      },
      err=>{

      }
    )
  }
  ValidarProfesor(){
    var TokenLogin = localStorage.getItem('TokenLogin');
    this.TokenProfesor = TokenLogin;
    this.JWTService.PostValidarLoginBarraSuperior(TokenLogin).subscribe(
      res=>{
        if(res.Estado == "Correcto" && res.idTipoUsuario == 3 ){
        }else{
          alert("Fallo Login");
          this.Router.navigateByUrl('/Inicio');
        }

      },err =>{

      }
    )

  }
  uploadFile(file) {
    const formData = new FormData();
    formData.append('video', file.data);
    file.inProgress = true;
    this.CrearCursoService.SubirVideo(formData).pipe(
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
          this.LinkSeccion = event.body.link;
          
          this.ValidarFC = true;
          console.log(event.body);
        }
      });
  }
  uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });

  }
  onClick() {
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }
  uploadimg(file) {
    const formData = new FormData();
    formData.append('img', file.data);
    file.inProgress = true;
    this.CrearCursoService.Subirimg(formData).pipe(
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
          this.LinkImagenCurso = event.body.link;
          this.Curso.LinkImagen = this.LinkImagenCurso;
          this.ValidarIC = true;
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
  CambiarSeccion(Seccion){
    
    this.SeccionCreate = Seccion;
    this.Opcion = 4;
    this.NombreSeccion.setValue(this.SeccionCreate.Nombre); 
    this.TipoArchivoM.setValue(this.SeccionCreate.idTipoArchivoMultimedia); 
    this.LinkSeccion = this.SeccionCreate.LinkMultimedia; 
    this.DescripcionSeccion.setValue(this.SeccionCreate.Contenido); 


  }
  CrearCurso(){
    
    this.NombreCurso.markAsTouched();
    this.DescripcionCurso.markAsTouched();

    if(this.LinkImagenCurso == ""){
      this.ValidarIC = false;
    }else{
      this.ValidarIC = true;
    }


    if(!this.NombreCurso.hasError('required') && !this.DescripcionCurso.hasError('required') && this.ValidarIC){
      
      this.Curso.Descripcion = this.DescripcionCurso.value;
      this.Curso.Nombre = this.NombreCurso.value;
      

      this.CrearCursoService.PostCrearCurso({ TokenLogin: this.TokenProfesor, Curso: this.Curso }).subscribe(
        res=>{
          console.log(res);
          alert("Bueno");
        },
        err=>{
          console.log(err);
          alert("Malo");
        }
      )

    }


  }
  EditarCurso(curso){
    this.Curso= curso;
    
    this.NombreCurso.setValue(this.Curso.Nombre); 
    this.LinkImagenCurso = this.Curso.LinkImagen; 
    this.DescripcionCurso.setValue(this.Curso.Descripcion); 

    
    this.Opcion = 2;



    this.ActualizarSeccionesCurso(curso.idCurso);

  }
  ActualizarSeccionesCurso(idCurso){
    this.CrearCursoService.GetListSeccioness(idCurso).subscribe(
      res=>{

        this.Secciones = res;

      },
      err=>{

      }
    )
  }
  CrearNuevaSeccion(){
    this.NombreSeccion.markAsTouched();
    this.DescripcionSeccion.markAsTouched();
    this.TipoArchivoM.markAllAsTouched();

    if(this.LinkSeccion == ""){
      this.ValidarFC = false;
    }else{
      this.ValidarFC = true;
    }
    

    if(!this.NombreSeccion.hasError('required') && !this.TipoArchivoM.hasError('required') && !this.DescripcionSeccion.hasError('required') && this.ValidarFC){
      
      this.SeccionCreate.Contenido = this.DescripcionSeccion.value;
      this.SeccionCreate.Nombre = this.NombreSeccion.value;
      this.SeccionCreate.LinkMultimedia = this.LinkSeccion;
      this.SeccionCreate.Numero = this.Secciones.length + 1;
      this.SeccionCreate.idTipoArchivoMultimedia = this.TipoArchivoM.value;
      this.SeccionCreate.idCurso = this.Curso.idCurso;


      this.CrearCursoService.PostCrearSeccion(this.SeccionCreate).subscribe(
        res=>{
          alert("Seccion Creada");
          this.Opcion = 0;
        },
        err=>{
          console.log(err);
          alert("Malo");
        }
      )

    }

  }
  EditarInfoCurso(){

    this.NombreCurso.markAsTouched();
    this.DescripcionCurso.markAsTouched();

    if(this.LinkImagenCurso == ""){
      this.ValidarIC = false;
    }else{
      this.ValidarIC = true;
    }


    if(!this.NombreCurso.hasError('required') && !this.DescripcionCurso.hasError('required') && this.ValidarIC){
      
      this.Curso.LinkImagen = this.LinkImagenCurso;
      this.Curso.Descripcion = this.DescripcionCurso.value;
      this.Curso.Nombre = this.NombreCurso.value;
      

      this.CrearCursoService.PutEditarCurso(this.Curso).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
  
        }
      )

    }

   

  }
  EditarInfoSeccion(){
    this.NombreSeccion.markAsTouched();
    this.DescripcionSeccion.markAsTouched();
    this.TipoArchivoM.markAllAsTouched();

    if(this.LinkSeccion == ""){
      this.ValidarFC = false;
    }else{
      this.ValidarFC = true;
    }
    

    if(!this.NombreSeccion.hasError('required') && !this.TipoArchivoM.hasError('required') && !this.DescripcionSeccion.hasError('required') && this.ValidarFC){
      
      this.SeccionCreate.Contenido = this.DescripcionSeccion.value;
      this.SeccionCreate.Nombre = this.NombreSeccion.value;
      this.SeccionCreate.LinkMultimedia = this.LinkSeccion;
      this.SeccionCreate.Numero = this.Secciones.length + 1;
      this.SeccionCreate.idTipoArchivoMultimedia = this.TipoArchivoM.value;
      this.SeccionCreate.idCurso = this.Curso.idCurso;


      this.CrearCursoService.PutEditarSeccion(this.SeccionCreate).subscribe(
        res=>{
          alert("Seccion Editada");
          this.Opcion = 0;
        },
        err=>{
          console.log(err);
          alert("Malo");
        }
      )

    }

  }

}
