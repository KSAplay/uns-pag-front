import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-vinculos',
  templateUrl: './vinculos.component.html',
  styleUrls: ['./vinculos.component.scss']
})
export class VinculosComponent implements OnInit {

  logos: Image[];
  responsiveOptions = [
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

  constructor() {
    this.logos = [];
  }

  ngOnInit(): void {
    this.logos = [
      {srcImage : 'assets/images/vinculos/uniBernardo.png', alt : 'Universidad Bernardo OHIGGIN'},
      {srcImage : "assets/images/vinculos/science-direct.png", alt : 'Science Direct'},
      {srcImage : "assets/images/vinculos/iop.png", alt : 'IOP Science'},
      {srcImage : "assets/images/vinculos/sunedu.png", alt : 'SUNEDU'},
      {srcImage : "assets/images/vinculos/pronabec.png", alt : 'Pronabec'},
      {srcImage : "assets/images/vinculos/beca-presidente.png", alt : 'Beca Presidente'}
    ];
  }

}
