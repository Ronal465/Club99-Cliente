import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Sirve Para hacer peticiones http
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
   Fecha Ultima Edicion:
   30/07/2020
*/
export class VerCursoService {
  ApiURL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {} 

  GetListMisCursos(TokenLogin): Observable<any> {
    return this.http.post(`${this.ApiURL}/MisCuros/List/Cursos`, {TokenLogin:TokenLogin});
  }


  ObtenerCursoUsuario(TokenLogin,idCurso): Observable<any> {
    return this.http.post(`${this.ApiURL}/MisCuros/Get/Curso`, {TokenLogin:TokenLogin,idCurso:idCurso});
  }




  

}

