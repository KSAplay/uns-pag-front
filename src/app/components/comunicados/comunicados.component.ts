import { Component, OnInit } from '@angular/core';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadosService } from 'src/app/services/comunicados.service';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.scss']
})
export class ComunicadosComponent implements OnInit {
  comunicados: Comunicado[];

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

  constructor(private comunicadosService:ComunicadosService) {
    this.comunicados=[];
  }

  ngOnInit(): void {
    this.comunicadosService.getComunicados().then(comunicados =>{ 
      this.comunicados = comunicados
    });
  }

}
