import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  prueba: string = "Blanco";

  constructor(private http: HttpClient) { }

  /* ----------- OBTENER NOTICIAS ----------- */
  getNoticias(): Promise<Noticia[]> {
    return this.http.get<any>('assets/data/noticias.json')
      .toPromise()
      .then(res => <Noticia[]>res.data)
      .then(data => { return data; });
  }

  /* ----------- OBTENER TEMA ----------- */
  obtenerTema(): Promise<Tema[]> {
    return this.http.get<any>('assets/data/tema'+this.prueba+'.json')
      .toPromise()
      .then(res => <Tema[]>res.data)
      .then(data => { return data; });
  }
}
