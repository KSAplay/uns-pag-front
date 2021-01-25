import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunicado } from '../models/comunicado';
import { HOST } from 'src/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {

  url: string = `${HOST}/comunicados`;  // URL del Servidor

  constructor(private http: HttpClient) { }

  // ---------------------------------------------------------------------
  //                    OBTENER COMUNICADOS VISIBLES
  // ---------------------------------------------------------------------
  getComunicados(): Promise<Comunicado[]> {
    return this.http.get<any>(`${this.url}/visibles`)
      .toPromise()
      .then(res => <Comunicado[]>res.data)
      .then(data => { return data; });
  }
}
