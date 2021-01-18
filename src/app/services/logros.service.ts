import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  prueba: string = "Blanco"; // Rojo, Blanco o Gris

  constructor(private http: HttpClient) { }

  /* ----------- OBTENER TEMA ----------- */
  obtenerTema(): Promise<Tema> {
    return this.http.get<any>('assets/data/tema'+this.prueba+'.json')
      .toPromise()
      .then(res => <Tema>res.data)
      .then(data => { return data; });
  }

}
