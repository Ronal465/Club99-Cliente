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
  PostCrearProfesor(Profesor): Observable<any> {

    return this.http.post(`${this.ApiURL}/Crear/Profesor/`,Profesor);

  }

  PostExperienciaProfesor(Experiencia): Observable<any> {

    return this.http.post(`${this.ApiURL}/Crear/Experiencia/`,Experiencia);

  }

  PostActualizarUsuario(Usuario): Observable<any> {

    return this.http.post(`${this.ApiURL}/Actualizar/Usuario/`,Usuario);

  }
  PostActualizarUsuarioSeguridadSocial(SeguridadSocial): Observable<any> {

    return this.http.post(`${this.ApiURL}/Actualizar/Usuario/SeguridadSocial/`,SeguridadSocial);

  }
  PostActualizarUsuarioExclusividad(Exclusividad): Observable<any> {

    return this.http.post(`${this.ApiURL}/Actualizar/Usuario/Exclusividad/`,Exclusividad);

  }
  PostActualizarUsuarioUbicacion(Ubicacion): Observable<any> {

    return this.http.post(`${this.ApiURL}/Actualizar/Usuario/Ubicacion/`,Ubicacion);

  }
  PostActualizarUsuarioContrasena(Contrasena): Observable<any> {

    return this.http.post(`${this.ApiURL}/Cambiar/Contrasena/`,Contrasena);

  }



}

