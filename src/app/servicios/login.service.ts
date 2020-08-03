import {Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'; // Sirve Para hacer peticiones http
import {Observable} from 'rxjs';
import { Usuario } from "../Modelos/Usuario";
@Injectable({
  providedIn: 'root'
})

/* Autor:
   Ronaldo Carlos Rodriguez Perez
   Ultima Edicion Por:
   Ronaldo Carlos Rodriguez Perez
   Fecha Ultima Edicion:
   30/07/2020
*/


export class LoginService {

  ApiURL = 'http://localhost:3000/api';

  constructor(private http : HttpClient ) {}

   PostLoguearse(Informacion : any) : Observable<any>{
    return this.http.post(`${this.ApiURL}/Login/Login`, Informacion);
  }
}
