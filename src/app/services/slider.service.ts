import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../models/slider';
import { HOST } from 'src/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  url: string = `${HOST}/sliders`;  // URL del Servidor

  constructor(private http: HttpClient) { }

  // ---------------------------------------------------------------------
  //                OBTENER IMAGENES DEL SLIDER VISIBLES
  // ---------------------------------------------------------------------
  getImages(): Promise<Slider[]> {
    return this.http.get<any>('assets/data/fotos.json')
      .toPromise()
      .then(res => <Slider[]>res.data)
      .then(data => { return data; });
    }
}
