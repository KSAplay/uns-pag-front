import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidenavService {

  private displaySource = new BehaviorSubject(false);
  currentDisplay = this.displaySource.asObservable();

  constructor() { }

  changeDisplay(display: boolean) {
    this.displaySource.next(display);
  }

}