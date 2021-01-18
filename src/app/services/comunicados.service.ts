import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunicado } from '../models/comunicado';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {

  prueba: string = "Rojo"; // Rojo, Blanco o Gris

  constructor(private http: HttpClient) { }

  getComunicados(): Promise<Comunicado[]> {
    return this.http.get<any>('assets/data/comunicados.json')
      .toPromise()
      .then(res => <Comunicado[]>res.data)
      .then(data => { return data; });
  }

  /* ----------- OBTENER TEMA ----------- */
  obtenerTema(): Promise<Tema> {
    return this.http.get<any>('assets/data/tema'+this.prueba+'.json')
      .toPromise()
      .then(res => <Tema>res.data)
      .then(data => { return data; });
  }
}
