import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  display: boolean;

  constructor(private sidenavService: SidenavService) {

   }

  ngOnInit(): void {

    this.sidenavService.currentDisplay.subscribe(display => this.display = display)
  }

  activar(){
    this.sidenavService.changeDisplay(true);
  }


}
