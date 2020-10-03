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


export class ListasFormulariosService {

  ApiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  GetListaProfesiones(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/Profesion`);

  }

  GetListaFuncionTipoUsuario(IntTipoUsuaro): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/FuncionTipoUsuario/${IntTipoUsuaro}`);

  }

  GetListaDepartamentos(IntidPais): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/Departamento/${IntidPais}`);

  }

  GetListaCiudades(IntidDepartamento): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/Ciudad/${IntidDepartamento}`);

  }

  GetListaExclusividad(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/TipoExclusividad/`);

  }

  GetListaClasificacionEtnica(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/ClasificacionEtnica`);

  }

  GetListatipoidentificacion(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/TipoIdentificacion`);

  }

  GetListaSeguridadSocial(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/TipoSeguridadSocial`);

  }

  GetListaPaises(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/Pais`);

  }

  GetListaNivelAcademico(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/NivelAcademico`);

  }

  GetListaProfesion(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/Profesion`);

  }

  GetListaGeneros(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/TipoGenero`);

  }

  GetListaPromotor(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/Promotor`);

  }

  GetListaEstadoValidacion(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/EstadoValidacion`);

  }

  GetListaTiposUsuarios(): Observable<any> {

    return this.http.get(`${this.ApiURL}/list/TiposUsuarios`);

  }

  GetUsaurio(idUsuario): Observable<any> {

    return this.http.get(`${this.ApiURL}/Get/Usuario/${idUsuario}`);

  }

  GetUsaurioUbicacion(idUsuario): Observable<any> {

    return this.http.get(`${this.ApiURL}/Get/Ubicacion/Usuario/${idUsuario}`);

  }
  GetUsaurioSeguridadSocial(idUsuario): Observable<any> {

    return this.http.get(`${this.ApiURL}/Get/SeguridadSocial/Usuario/${idUsuario}`);

  }

  GetUsaurioExclusividad(idUsuario): Observable<any> {

    return this.http.get(`${this.ApiURL}/Get/Exclusividad/Usuario/${idUsuario}`);

  }

  GetListUsuarios(TokenLogin): Observable<any> {

    return this.http.post(`${this.ApiURL}/list/Usuarios`,TokenLogin);

  }
  GetIdUsuario(TokenLogin): Observable<any> {

    return this.http.post(`${this.ApiURL}/Get/Usuario`,{TokenLogin:TokenLogin});

  }
  
 
                


}