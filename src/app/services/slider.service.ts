import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../models/slider';
import { HOST } from 'src/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  url: string = `${HOST}/sliders`; // URL del Servidor

  constructor(private http: HttpClient) { }

  // ---------------------------------------------------------------------
  //                      OBTENER VÍNCULOS VISIBLES
  // ---------------------------------------------------------------------
  getSliders(): Promise<Slider[]> {
    return this.http.get<any>(`${this.url}/visibles`)
      .toPromise()
      .then(res => <Slider[]>res.data)
      .then(data => { return data; });
  }
}
