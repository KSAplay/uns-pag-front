import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/tema';
import { HOST } from '../../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  url = HOST;

  constructor(private http: HttpClient) { }

  // ---------------------------------------------------------------------
  //                    OBTENER TEMA SEGUN COMPONENTE
  // ---------------------------------------------------------------------
  obtenerTema(frontendid: string): Promise<Tema>{
    return this.http.get<any>(`${this.url}/api/temas/seccion/frontendid/${frontendid}`)
        .toPromise()
        .then(res => <Tema>res.data)
        .then(data => { return data; });
  }
}
