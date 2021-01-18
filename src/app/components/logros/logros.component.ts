import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/tema';
import { LogrosService } from 'src/app/services/logros.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.scss']
})
export class LogrosComponent implements OnInit {

  tema = new Tema();
  colorImg: string;

  constructor(private logrosService: LogrosService) {
    this.colorImg = "rojo";
  }

  ngOnInit(): void {
    this.logrosService.obtenerTema().then(theme =>{ 
      this.tema = theme[0];
    });

    setTimeout(() => {this.aplicarTema(this.tema)}, 500);
  }
  
  aplicarTema(tema: Tema){
    if(tema.descripcion == "Rojo"){
      this.colorImg = "blanco";
    } else {
      this.colorImg = "rojo"
    }
  }
}
