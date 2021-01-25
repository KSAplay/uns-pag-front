import { Component, OnInit } from '@angular/core';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadosService } from 'src/app/services/comunicados.service';
import { TemasService } from 'src/app/services/temas.service';
import { Tema } from 'src/app/models/tema';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.scss']
})
export class ComunicadosComponent implements OnInit {

  // Array de los Comunicados visibles
  comunicados: Comunicado[];
  // Variable del Tema de Comunicados
  tema = new Tema();
  // Opciones para el Responsive del Carrusel
  responsiveOptions: any[] = [
    {
        breakpoint: '2600px',
        numVisible: 4,
        numScroll: 4
    },
    {
        breakpoint: '1800px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  constructor(private comunicadosService:ComunicadosService, private temasService: TemasService) {
    this.comunicados=[];
  }

  ngOnInit(): void {
    // Llamada a la función "getComunicados()" del servicio "comunicados.service.ts"
    // y almacenar la data en el array "comunicados[]"
    this.comunicadosService.getComunicados().then(comunicados =>{ 
      this.comunicados = comunicados;
    });
    // Llamada a la función "obtenerTema()" del servicio "temas.service.ts"
    // y almacenar la data en la variable "tema: Tema()"
    this.temasService.obtenerTema('ComunicadosComponent').then(theme =>{ 
      this.tema = theme;
    });
    // Espera de 1 segundo para aplicar el tema (debido a la demora que toma en guardar los datos)
    setTimeout(() => {this.aplicarTema(this.tema)}, 1000);
  }

  aplicarTema(tema: Tema){
    // Carrousel Flechas
    document.documentElement.style.setProperty('--comunicados-flechas', tema.color_flecha_carrousel);
    // Carrousel Boton Activo
    document.documentElement.style.setProperty('--comunicados-btnBordeActivo', tema.color_btn_carrousel_borde_activo);
    document.documentElement.style.setProperty('--comunicados-btnRellenoActivo', tema.color_btn_carrousel_relleno_activo);
    // Carrousel Boton Inactivo
    document.documentElement.style.setProperty('--comunicados-btnBordeInactivo', tema.color_btn_carrousel_borde_inactivo);
  }
}
