import { Component, OnInit } from '@angular/core';
import { VerCursoService } from "../../servicios/ver-curso.service";



@Component({
  selector: 'app-responder-preguntas',
  templateUrl: './responder-preguntas.component.html',
  styleUrls: ['./responder-preguntas.component.scss']
})
export class ResponderPreguntasComponent implements OnInit {

  TokenLogin;


  Preguntas = [];


  constructor(private VerCursoService: VerCursoService) { }

  ngOnInit(): void {

    this.TokenLogin = localStorage.getItem('TokenLogin');
    this.ActualizarPreguntas();

  
  }

  ActualizarPreguntas(){
    this.VerCursoService.GetPreguntasProfesor({ TokenLogin:this.TokenLogin}).subscribe(
      res=>{
        this.Preguntas = res;
      }
    )

  }

  ResponderPregunta(Pregunta){

    this.VerCursoService.ResponderPreguntasProfesor(Pregunta).subscribe(
      res=>{
        this.ActualizarPreguntas();
      },
      err=>{

      }
    )

  }


}
