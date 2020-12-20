import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images: Image[];

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
    this.sliderService.getImages().then(images =>{ 
      this.images = images
    });
  }

}
