import { Component, OnInit } from '@angular/core';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { LogrosComponent } from './components/logros/logros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { VinculosComponent } from './components/vinculos/vinculos.component';
import { Seccion } from './models/seccion';
import { SeccionesService } from './services/secciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'uns-pag-front';
  secciones: Seccion[];

  NoticiasComponent = NoticiasComponent;

  constructor(private seccionesService: SeccionesService){
    this.secciones = [];
  }

  ngOnInit(): void {
    this.getSeccionesOrden();
  }

  getSeccionesOrden(){
    this.seccionesService.getSeccionesOrden().then(secciones =>{
      this.secciones = secciones;
    })
  }

  getComponente(name: string){

    switch(name) { 
      case  "NoticiasComponent": { 
         return NoticiasComponent
      } 
      case "ComunicadosComponent": { 
        return ComunicadosComponent;
      } 
      case "LogrosComponent": { 
        return LogrosComponent;
      } 
      case "VinculosComponent": { 
        return VinculosComponent;
      } 
   } 

  }

}
