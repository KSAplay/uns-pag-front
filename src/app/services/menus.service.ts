import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { HOST } from 'src/shared/var.constant';


@Injectable({
  providedIn: 'root'
})

export class MenuService {

    // URL BACKEND
    url: string = `${HOST}/menus`
  
    constructor(private http: HttpClient) { }
  
    getMenus(): Promise<Menu[]> {
      return this.http.get<any>(`${this.url}`)
        .toPromise()
        .then(res => <Menu[]>res.data)
        .then(data => { return data; });
    }

}