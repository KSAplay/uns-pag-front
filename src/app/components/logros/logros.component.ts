import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/tema';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.scss']
})
export class LogrosComponent implements OnInit {

  tema = new Tema();
  colorImg: string;

  constructor(private temasService: TemasService) {
    this.colorImg = "rojo";
  }

  ngOnInit(): void {
    this.temasService.obtenerTema('LogrosComponent').then(theme =>{ 
      this.tema = theme;
    });

    setTimeout(() => {this.aplicarTema(this.tema)}, 1000);
  }
  
  aplicarTema(tema: Tema){
    if(tema.descripcion == "Rojo"){
      this.colorImg = "blanco";
    } else {
      this.colorImg = "rojo"
    }
  }
}
