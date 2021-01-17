import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { Tema } from 'src/app/models/tema';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[];
  tema: Tema[];
  prueba: string = "background: red";

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

  constructor(private noticiasService: NoticiasService) {
    this.noticias = [];
    this.tema = [];
  }

  ngOnInit(): void {
    this.noticiasService.getNoticias().then(noticias =>{ 
      this.noticias = noticias
    });

    this.noticiasService.obtenerTema().then(tema =>{ 
      this.tema = tema;
    });

    this.aplicarTema();
  }

  aplicarTema(){
    document.documentElement.style.setProperty('--noticias-color', 'yellow');
  }

}
