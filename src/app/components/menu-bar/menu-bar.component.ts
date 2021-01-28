import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MenuService } from 'src/app/services/menus.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  display: boolean;

  items: MegaMenuItem[];


  constructor(private menuService: MenuService, private sidenavService: SidenavService) {

  }

  ngOnInit(): void {
    this.cargarData();
    this.sidenavService.currentDisplay.subscribe(display =>
      this.display = display)
  }

  activar() {
    this.sidenavService.changeDisplay(true);
  }

  cargarData() {
    this.menuService.getMenus().then(data => {
      this.items = [];

      this.items=data.map(item=>({
        label: item.nombre,
        items: item.children.map(ite =>[{
          label: ite.nombre,
          url: ite.ruta,
          items: ite.children.map(it =>({
            label: it.nombre,
            url: it.ruta
          }))
        }])
      }));
     
    
      console.log(this.items);

    });

  }

}



