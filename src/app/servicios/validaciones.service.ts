import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Sirve Para hacer peticiones http
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  ApiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  PostValidacionCorreo(Correo): Observable<any> {

    return this.http.post(`${this.ApiURL}/Validar/CorreoElectronico/`,Correo);

  }

  PostValidacionDocumento(IntDocumento): Observable<any> {

    return this.http.post(`${this.ApiURL}/Validar/Identificacion/`,IntDocumento);

  }



}
