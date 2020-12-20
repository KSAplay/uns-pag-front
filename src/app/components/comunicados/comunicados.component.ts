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

  constructor(private comunicadosService:ComunicadosService) {
    this.comunicados=[];
  }

  ngOnInit(): void {
    this.comunicadosService.getComunicados().then(comunicados =>{ 
      this.comunicados = comunicados
    });
  }

}
