import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia';
import { HOST } from 'src/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url: string = `${HOST}/noticias`; // URL del Servidor

  constructor(private http: HttpClient) { }

  // ---------------------------------------------------------------------
  //                      OBTENER NOTICIAS VISIBLES
  // ---------------------------------------------------------------------
  getNoticias(): Promise<Noticia[]> {
    return this.http.get<any>(`${this.url}/visibles`)
      .toPromise()
      .then(res => <Noticia[]>res.data)
      .then(data => { return data; });
  }
}
