import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/models/slider';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  // Variable para las Imágenes del Slider
  images: Slider[];
  // Opciones para el Responsive del Carrusel
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  constructor(private sliderService: SliderService) {
    this.images = [];
  }

  ngOnInit(): void {
    // Llamada a la función "getImages()" del servicio "slider.service.ts"
    // y almacenar la data en el array "images[]"
    this.sliderService.getImages().then(images =>{ 
      this.images = images
    });
  }

}
