import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'; // Sirve Para hacer peticiones http
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

    ApiURL = 'http://localhost:3000/api/';

  constructor(private http : HttpClient) { }
  

    
    logout() {
      localStorage.removeItem('token');
    }


    PostValidarLoginBarraSuperior(TokenLogin: string) : Observable<any>{
     
      return this.http.post(`${this.ApiURL}Validar/TokenLogin/`,{ TokenLogin: TokenLogin});
  
    } 

}
