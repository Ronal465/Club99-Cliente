import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { ListarCursosService } from "../../servicios/listar-cursos.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
   Fecha Ultima Edicion:
   30/07/2020
*/


export class InicioComponent implements OnInit {


  ListaCursoGratis = [];
  ListaCursoExclusivos= [];
  ListaCursoEtnicos= [];
  Profesor;
  FiltrosCurso;
  Curso;
  NombresFiltros = [];

  constructor(private ListarCursosService: ListarCursosService) { }

  ngOnInit() {

    this.GetLisCursosGratis();
    this.GetListCursosExclusivos();
    this.GetLisCursosEtnicos();
  
    this.ListaCursoGratis = this.ListaCursoGratis.splice(0,4);
    this.ListaCursoExclusivos = this.ListaCursoGratis.splice(0,4);
    this.ListaCursoEtnicos = this.ListaCursoGratis.splice(0,4);
  

    console.log(this.ListaCursoGratis);
    console.log(this.ListaCursoExclusivos);
    console.log(this.ListaCursoEtnicos);
    
  }


  GetLisCursosGratis() {
    this.ListarCursosService.GetCursosGratis().subscribe(
      res => {



        res.forEach(element => {

          var Curso = element;




          this.ListarCursosService.ConsultProfesor(Curso).
            subscribe(
              res2 => {

                var Profesor = res2[0];

                this.ListarCursosService.ConsultFiltros(Curso).
                  subscribe(
                    res3 => {

                      var FiltrosCurso = res3;


                      var Nombres = [];

                      FiltrosCurso.forEach(element2 => {

                        this.ListarCursosService.ConsultFiltroNombre(element2).
                          subscribe(
                            res4 => {

                              Nombres.push(res4);



                            });



                      });


                      this.ListaCursoGratis.push(
                        {
                          Curso: Curso,
                          Profesor: Profesor,
                          NombresFiltro: Nombres
                        }
                      )
                      console.log(this.ListaCursoGratis[0].Curso);



                    });



              }
            )

        });

      }
    )

  }
  GetLisCursosEtnicos(){

    var TokenLogin = localStorage.getItem('TokenLogin');

    this.ListarCursosService.GetCursosEtnicos({TokenLogin:TokenLogin}).subscribe(
      res => {



        res.forEach(element => {

          var Curso = element;




          this.ListarCursosService.ConsultProfesor(Curso).
            subscribe(
              res2 => {

                var Profesor = res2[0];

                this.ListarCursosService.ConsultFiltros(Curso).
                  subscribe(
                    res3 => {

                      var FiltrosCurso = res3;


                      var Nombres = [];

                      FiltrosCurso.forEach(element2 => {

                        this.ListarCursosService.ConsultFiltroNombre(element2).
                          subscribe(
                            res4 => {

                              Nombres.push(res4);



                            });



                      });


                      this.ListaCursoEtnicos.push(
                        {
                          Curso: Curso,
                          Profesor: Profesor,
                          NombresFiltro: Nombres
                        }
                      )




                    });



              }
            )

        });

      }
    )

  }
  GetListCursosExclusivos(){

    var TokenLogin = localStorage.getItem('TokenLogin');

    this.ListarCursosService.GetCursosExclusivos({TokenLogin:TokenLogin}).subscribe(
      res => {



        res.forEach(element => {

          var Curso = element;




          this.ListarCursosService.ConsultProfesor(Curso).
            subscribe(
              res2 => {

                var Profesor = res2[0];

                this.ListarCursosService.ConsultFiltros(Curso).
                  subscribe(
                    res3 => {

                      var FiltrosCurso = res3;


                      var Nombres = [];

                      FiltrosCurso.forEach(element2 => {

                        this.ListarCursosService.ConsultFiltroNombre(element2).
                          subscribe(
                            res4 => {

                              Nombres.push(res4);



                            });



                      });


                      this.ListaCursoExclusivos.push(
                        {
                          Curso: Curso,
                          Profesor: Profesor,
                          NombresFiltro: Nombres
                        }
                      )




                    });



              }
            )

        });

      }
    )

  }


  InfoCurso() {
    alert("Le estoy mostrando un curso eva e maria");
  }
}
