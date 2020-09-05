import {Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'; // Sirve Para hacer peticiones http
import {Observable} from 'rxjs';

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


export class ListasFormulariosService {

  ApiURL = 'http://localhost:3000/api';
  
  constructor(private http : HttpClient ) {}

   GetListaProfesiones() : Observable<any>{
     
    return this.http.get(`${this.ApiURL}/list/Profesion`);

  } 

  GetListaFuncionTipoUsuario(IntTipoUsuaro) : Observable<any>{
     
    return this.http.get(`${this.ApiURL}/list/FuncionTipoUsuario/${IntTipoUsuaro}`);

  } 

  GetListaExclusividad() : Observable<any>{
     
    return this.http.get(`${this.ApiURL}/list/TipoExclusividad/`);

  }

}