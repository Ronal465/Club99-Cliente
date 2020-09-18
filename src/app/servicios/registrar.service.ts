import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Sirve Para hacer peticiones http
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  ApiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  PostMandarCorreoRecuperar(CorreoElectronico): Observable<any> {

    return this.http.post(`${this.ApiURL}/Recuperar/Contrasena/Token/`,CorreoElectronico);

  }
  PostValidacionTokenRecuperar(Token ): Observable<any> {

    return this.http.post(`${this.ApiURL}/Validar/Token/CambiarContrasena/`,Token );

  }
  PostCambiarContraseña(JsonCambiar ): Observable<any> {

    return this.http.post(`${this.ApiURL}/Recuperar/Contrasena/Cambiar/`,JsonCambiar );

  }
  PostValidacionTokenRegister(Token ): Observable<any> {

    return this.http.post(`${this.ApiURL}/Validar/Token/Register/`,Token);

  }
  PostCrearUsuario(Token ): Observable<any> {

    return this.http.post(`${this.ApiURL}/Validar/CrearUsuario/`,Token);

  }
  PostMandarCorreoCrear(TokenRegister): Observable<any> {

    return this.http.post(`${this.ApiURL}/Login/Registrar`,TokenRegister);

  }


}

