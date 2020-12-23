import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULOS DE PRIMENG
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    GalleriaModule,
    CarouselModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelMenuModule
    
  ],
  exports: [
    CardModule,
    GalleriaModule,
    CarouselModule,
    SidebarModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelMenuModule
  ]
})
export class PrimengModule { }
