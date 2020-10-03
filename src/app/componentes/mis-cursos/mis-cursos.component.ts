import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  VerCursoService} from "../../servicios/ver-curso.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss']
})
export class MisCursosComponent implements OnInit {




   BuscarCurso = new FormControl('', Validators.required);



  ListaCursos = [];

  TokenLogin ;


  constructor(private VerCursoService:VerCursoService,private Router : Router) { }

  ngOnInit(): void {
    this.TokenLogin = localStorage.getItem('TokenLogin');
     this.ObtenerCursosUsuario();
 
   }
 
   ObtenerCursosUsuario(){
       this.VerCursoService.GetListMisCursos(this.TokenLogin).subscribe(
         res=>{
           console.log(res);
           this.ListaCursos = res;
           console.log(this.ListaCursos)
         }
       )
   }

   MirarCurso(idCurso){
    this.Router.navigateByUrl('/MirarCurso/' + idCurso );
   }

}
