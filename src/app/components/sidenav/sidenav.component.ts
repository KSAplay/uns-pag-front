import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  display: boolean;

  items: MenuItem[];



  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.currentDisplay.subscribe(display => this.display = display)

    this.items = [
      {
        label: 'ADMISIÓN',
        items: [
          {
            label: 'PROCESO DE ADMISIÓN',
            items: [
              { label: 'Proceso de inscripcioón' },
              { label: 'Cronograma' },
              { label: 'Derecho de Inscripción' },
              { label: 'Inscripción Online' },
              { label: 'Tabla de Conversiones' },
              { label: 'Reglamento' },
              { label: 'Temario' },
              { label: 'Consejos' },
              { label: 'Preguntas Frecuentes' }
            ]
          }
        ]
      },
      {
        label: 'FACULTADES',
        items: [
          {
            label: 'FACULTAD DE INGENIERÍA',
            items: [
              { label: 'Ingenería de Sistemas e Informática' },
              { label: 'Ingeniería Civil' },
              { label: 'Ingeniería Agroindustrial' },
              { label: 'Ingeniería en Energía' },
              { label: 'Ingeniería Agrónoma' },
              { label: 'Ingeniería Mecánica' }
            ]
          },
          {
            label: 'FACULTAD DE CIENCIAS',
            items: [
              { label: 'Biologia en Acuicultura' },
              { label: 'Enfermería' }, 
              { label: 'Biotecnología' },
              { label: 'Medicina Humana' }

            ]
          },
          {
            label: 'FACULTAD DE EDUCACIÓN Y HUMANIDADES',
            items: [
              { label: 'Educación Inicial' },
              { label: 'Educación Primaria' },
              { label: 'Educación Secundaria' },
              { label: 'Comunicación Social' },
              { label: 'Derecho y Ciencias Politicas' }
            ]
          }
        ]
      },

      {
        label: 'Postgrado',
        items: [
          { label: 'New' },
          { label: 'Open' },
          { label: 'Open' },
          { label: 'Quit' }
        ]
      },
      {
        label: 'Direcciones',
        items: [
          { label: 'New' },
          { label: 'Open' },
          { label: 'Open' },
          { label: 'Quit' }
        ]
      },
      {
        label: 'C. de Produccion',
        items: [
          { label: 'New' },
          { label: 'Open' },
          { label: 'Open' },
          { label: 'Quit' }
        ]
      },
      {
        label: 'Vinculos',
        items: [
          { label: 'New' },
          { label: 'Open' },
          { label: 'Open' },
          { label: 'Quit' }
        ]
      }
    ];

  }

}
