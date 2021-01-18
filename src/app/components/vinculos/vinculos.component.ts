import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { Tema } from 'src/app/models/tema';
import { VinculosService } from 'src/app/services/vinculos.service';

@Component({
  selector: 'app-vinculos',
  templateUrl: './vinculos.component.html',
  styleUrls: ['./vinculos.component.scss']
})
export class VinculosComponent implements OnInit {

  tema = new Tema();
  logos: Image[];
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

  constructor(private vinculosService: VinculosService) {
    this.logos = [];
  }

  ngOnInit(): void {

    this.vinculosService.obtenerTema().then(theme =>{ 
      this.tema = theme[0];
    });

    this.logos = [
      {srcImage : 'assets/images/vinculos/uniBernardo.png', alt : 'Universidad Bernardo OHIGGIN'},
      {srcImage : "assets/images/vinculos/science-direct.png", alt : 'Science Direct'},
      {srcImage : "assets/images/vinculos/iop.png", alt : 'IOP Science'},
      {srcImage : "assets/images/vinculos/sunedu.png", alt : 'SUNEDU'},
      {srcImage : "assets/images/vinculos/pronabec.png", alt : 'Pronabec'},
      {srcImage : "assets/images/vinculos/beca-presidente.png", alt : 'Beca Presidente'}
    ];

    setTimeout(() => {this.aplicarTema(this.tema)}, 500);
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
