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
export class CrearCursoService {
  ApiURL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  PostCrearCurso(Curso): Observable<any> {
    return this.http.post(`${this.ApiURL}/Crear/Curso`, Curso);
  }
  PostCrearSeccion(Seccion): Observable<any> {
    return this.http.post(`${this.ApiURL}/Crear/Seccion`, Seccion);
  }
  PutEditarCurso(Curso): Observable<any> {
    return this.http.put(`${this.ApiURL}/Editar/Curso`, Curso);
  }
  PutEditarSeccion(Seccion): Observable<any> {
    return this.http.put(`${this.ApiURL}/Editar/Seccion`, Seccion);
  }
  GetListCursos(): Observable<any> {
    return this.http.get(`${this.ApiURL}/List/Cursos`);
  }
  GetListSeccioness(idCurso): Observable<any> {
    return this.http.get(`${this.ApiURL}/List/Secciones/${idCurso}`);
  }
  SubirVideo(formData){
    return this.http.post(`${this.ApiURL}/Upload/File`, formData,{ reportProgress:true,
                                                                   observe: 'events'});
  }   
  Subirimg(formData){
    return this.http.post(`${this.ApiURL}/Upload/img`, formData,{ reportProgress:true,
                                                                       observe: 'events'});
  }

  
}


