import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seccion } from '../models/seccion';
import { HOST } from 'src/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  url: string = `${HOST}/secciones`

  constructor(private http: HttpClient) { }

  getSeccionesOrden(): Promise<Seccion[]> {
    return this.http.get<any>(`${this.url}/orden`)
      .toPromise()
      .then(res => <Seccion[]>res.data)
      .then(data => { return data; });
  }
}
