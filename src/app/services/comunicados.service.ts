import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunicado } from '../models/comunicado';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {

  constructor(private http: HttpClient) { }

  getComunicados(): Promise<Comunicado[]> {
    return this.http.get<any>('assets/data/comunicados.json')
      .toPromise()
      .then(res => <Comunicado[]>res.data)
      .then(data => { return data; });
  }
}
