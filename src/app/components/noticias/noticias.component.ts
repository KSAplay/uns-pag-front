import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Tema } from 'src/app/models/tema';
import { NoticiasService } from 'src/app/services/noticias.service';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  // Variable de las Noticias visibles
  noticias: Noticia[];
  // Variable del Tema de Noticias
  tema = new Tema();
  // Opciones para el Responsive del Carrusel
  responsiveOptions: any[] = [
    {
        breakpoint: '2600px',
        numVisible: 5,
        numScroll: 5
    },
    {
        breakpoint: '1800px',
        numVisible: 4,
        numScroll: 4
    },
    {
        breakpoint: '1024px',
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

  constructor(private noticiasService: NoticiasService, private temasService: TemasService) {
    this.noticias = [];
  }

  ngOnInit(): void {
    // Llamada a la función "getNoticias()" del servicio "noticias.service.ts"
    // y almacenar la data en el array "noticias[]"
    this.noticiasService.getNoticias().then(noticias =>{ 
      this.noticias = noticias
    });
    // Llamada a la función "obtenerTema()" del servicio "temas.service.ts"
    // y almacenar la data en la variabl "tema: Tema()"
    this.temasService.obtenerTema('NoticiasComponent').then(theme =>{ 
      this.tema = theme;
    });
    // Espera de 1 segundo para aplicar el tema (debido a la demora que toma en guardar los datos)
    setTimeout(() => {this.aplicarTema(this.tema)}, 1000);
  }

  aplicarTema(tema: Tema){
    // Carrousel Flechas
    document.documentElement.style.setProperty('--noticias-flechas', tema.color_flecha_carrousel);
    // Carrousel Boton Activo
    document.documentElement.style.setProperty('--noticias-btnBordeActivo', tema.color_btn_carrousel_borde_activo);
    document.documentElement.style.setProperty('--noticias-btnRellenoActivo', tema.color_btn_carrousel_relleno_activo);
    // Carrousel Boton Inactivo
    document.documentElement.style.setProperty('--noticias-btnBordeInactivo', tema.color_btn_carrousel_borde_inactivo);
  }

}
