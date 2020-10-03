import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Sirve Para hacer peticiones http
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
   Fecha Ultima Edicion:
   30/07/ 2020
*/




  
export class ListarCursosService {

  ApiURL = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }
  
    GetCursosGratis() : Observable<any>{
     
      return this.http.get(`${this.ApiURL}/Inicio/List/Cursos`);
  
    } 
    GetCursosEtnicos(TokenLogin) : Observable<any>{
     
      return this.http.post(`${this.ApiURL}/Inicio/List/Cursos/Etnicos`,TokenLogin);
  
    } 
    GetCursosExclusivos(TokenLogin) : Observable<any>{
     
      return this.http.post(`${this.ApiURL}/Inicio/List/Cursos/Exclusivo`,TokenLogin);
  
    } 
    ConsultProfesor(curso) : Observable<any>{
     
      return this.http.post(`${this.ApiURL}/Inicio/Get/Profesor`,curso);
  
    } 
    ConsultFiltros(curso) : Observable<any>{
     
      return this.http.post(`${this.ApiURL}/Inicio/Get/Filtros`,curso);
  
    } 
    ConsultFiltroNombre(FiltroCurso) : Observable<any>{
     
      return this.http.post(`${this.ApiURL}/Inicio/Get/Nombre/Filtro`,FiltroCurso);
  
    } 

    

    


}

