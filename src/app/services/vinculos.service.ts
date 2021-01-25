import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinculo } from '../models/vinculo';
import { HOST } from 'src/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class VinculosService {

  url: string = `${HOST}/vinculos`; // URL del Servidor

  constructor(private http: HttpClient) { }

  // ---------------------------------------------------------------------
  //                      OBTENER VÍNCULOS VISIBLES
  // ---------------------------------------------------------------------
  getVinculos(): Promise<Vinculo[]> {
    return this.http.get<any>(`${this.url}/visibles`)
      .toPromise()
      .then(res => <Vinculo[]>res.data)
      .then(data => { return data; });
  }
}
