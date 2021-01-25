import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/models/tema';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.scss']
})
export class LogrosComponent implements OnInit {

  // Variable del Tema de Logros
  tema = new Tema();
  // Variable para decidir el color de los Iconos
  colorImg: string;

  constructor(private temasService: TemasService) {
    this.colorImg = "rojo"; // Inicializa en rojo
  }

  ngOnInit(): void {
    // Llamada a la función "obtenerTema()" del servicio "temas.service.ts"
    // y almacenar la data en la variable "tema: Tema()"
    this.temasService.obtenerTema('LogrosComponent').then(theme =>{ 
      this.tema = theme;
    });
    // Espera de 1 segundo para aplicar el tema (debido a la demora que toma en guardar los datos)
    setTimeout(() => {this.aplicarTema(this.tema)}, 1000);
  }
  
  aplicarTema(tema: Tema){
    // Decide si el tema es Rojo para colocar los Iconos blancos, o sino colocar los Iconos rojos
    if(tema.descripcion == "Rojo"){
      this.colorImg = "blanco";
    } else {
      this.colorImg = "rojo"
    }
  }
}
