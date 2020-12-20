import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULOS DE PRIMENG
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    GalleriaModule,
    CarouselModule
  ],
  exports: [
    CardModule,
    GalleriaModule,
    CarouselModule
  ]
})
export class PrimengModule { }
