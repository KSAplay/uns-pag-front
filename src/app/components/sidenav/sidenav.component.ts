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

  items: MenuItem[];  // <------ Va a cambiar por el modelo



  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    // Aqui llamaría al servicio para obtener todo el menú (cambiar)
    this.sidenavService.currentDisplay.subscribe(display => this.display = display)

    this.items = [
      {
        label: 'ADMISIÓN',
        items: [
          { label: 'Proceso de inscripción' },
          { label: 'Cronograma' },
          { label: 'Derecho de Inscripción' },
          { label: 'Inscripción Online' },
          { label: 'Tabla de Conversiones' },
          { label: 'Reglamento' },
          { label: 'Temario' },
          { label: 'Consejos' },
          { label: 'Preguntas Frecuentes' }
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
        label: 'POSTGRADO',
        items: [
          {
            label: 'MAESTRÍAS',
            items: [
              { label: 'Derecho Constitucional' },
              { label: 'Derecho Penal' },
              { label: 'Ciencias de Enfermería' },
              { label: 'Ciencias de la Educación' },
              { label: 'Ciencias Energéticas' },
              { label: 'Gerencia de Industrias Agropecuarias' }
            ]
          },
          {
            label: 'DOCTORADOS',
            items: [
              { label: 'Concepcion del Doctorado' },
              { label: 'Perfil del Doctor' },
              { label: 'Matrícula' },
              { label: 'Inversión' },
              { label: 'Informes e Inscripciones' }
            ]
          }
        ]
      },
      {
        label: 'DIRECCIONES',
        items: [
          { label: 'Rectorado' },
          { label: 'Vicerrectorado Académico' },
          { label: 'Vicerrectorado de Investigación' },
          { label: 'Dirección General de Administración' }
        ]
      },
      {
        label: 'C. DE PRODUCCIÓN',
        items: [
          { label: 'Centro Preuniversitario CEPUNS' },
          { label: 'Centro de Idiomas CEIDUNS' },
          { label: 'Centro de Cómputo CECOMP' },
          { label: 'Institucion Educativa Experimental' },
          { label: 'Planta Piloto Agroindustrial' }
        ]
      },
      {
        label: 'VÍNCULOS',
        items: [
          { label: 'Universidad' },
          { label: 'Directorio' },
          { label: 'Intranet' },
          { label: 'Defensoría Universitaria' },
          { label: 'Licenciamiento' },
          { label: 'Campus Virtual' },
          { label: 'Correo UNS' },
          { label: 'Trnasparencia' }
        ]
      }
    ];

  }

}
