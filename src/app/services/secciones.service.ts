import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seccion } from '../models/seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionesService {

  constructor(private http: HttpClient) { }

  getSeccionesOrden(): Promise<Seccion[]> {
    return this.http.get<any>('assets/data/secciones.json')
      .toPromise()
      .then(res => <Seccion[]>res.data)
      .then(data => { return data; });
  }
}
