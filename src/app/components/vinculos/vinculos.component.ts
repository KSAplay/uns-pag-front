import { Component, OnInit } from '@angular/core';
import { Vinculo } from '../../models/vinculo';
import { Tema } from 'src/app/models/tema';
import { TemasService } from 'src/app/services/temas.service';
import { VinculosService } from '../../services/vinculos.service';
import { HOST } from '../../../shared/var.constant';

@Component({
  selector: 'app-vinculos',
  templateUrl: './vinculos.component.html',
  styleUrls: ['./vinculos.component.scss']
})
export class VinculosComponent implements OnInit {

  // Variable del clase/modelo Tema
  tema = new Tema();
  // Variable de los Vinculos visibles
  vinculos: Vinculo[];
  // Opciones para el Responsive del Carrusel
  responsiveOptions = [
      {
          breakpoint: '2600px',
          numVisible: 6,
          numScroll: 6      
      },
      {
          breakpoint: '1800px',
          numVisible: 5,
          numScroll: 5      
      },
      {
          breakpoint: '1025px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '769px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '561px',
          numVisible: 2,
          numScroll: 2
      },
      {
        breakpoint: '380px',
        numVisible: 1,
        numScroll: 1
      }
  ];

  constructor(private temasService: TemasService, private vinculosService: VinculosService) {
    this.vinculos = [];
  }

  ngOnInit(): void {
    // Llamada a la función "getVinculos()" del servicio "vinculos.service.ts"
    // y almacenar la data en el array "vinculos[]"
    this.vinculosService.getVinculos().then(vinculos =>{ 
      this.vinculos = vinculos;
    });
    // Llamada a la función "obtenerTema()" del servicio "temas.service.ts"
    // y almacenar la data en la variable "tema: Tema()"
    this.temasService.obtenerTema('VinculosComponent').then(theme =>{ 
      this.tema = theme;
    });
    // Espera de 1 segundo para aplicar el tema (debido a la demora que toma en guardar los datos)
    setTimeout(() => {this.aplicarTema(this.tema)}, 1000);
  }

  aplicarTema(tema: Tema){
    // Carrousel Flechas
    document.documentElement.style.setProperty('--vinculos-flechas', tema.color_flecha_carrousel);
    // Carrousel Boton Activo
    document.documentElement.style.setProperty('--vinculos-btnBordeActivo', tema.color_btn_carrousel_borde_activo);
    document.documentElement.style.setProperty('--vinculos-btnRellenoActivo', tema.color_btn_carrousel_relleno_activo);
    // Carrousel Boton inactivo
    document.documentElement.style.setProperty('--vinculos-btnBordeInactivo', tema.color_btn_carrousel_borde_inactivo);
  }

}
