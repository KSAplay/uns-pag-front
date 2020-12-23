import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulo PrimeNG
import { PrimengModule } from './primeng/primeng.module';
import { SliderComponent } from './components/slider/slider.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { LogrosComponent } from './components/logros/logros.component';
import { VinculosComponent } from './components/vinculos/vinculos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavService } from './services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MenuBarComponent,
    NoticiasComponent,
    ComunicadosComponent,
    LogrosComponent,
    VinculosComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
