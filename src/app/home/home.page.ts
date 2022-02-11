import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('fab') fab: any;

  constructor() {}

  toggleFab() {
    this.fab.activated = !this.fab.activated;
  }
}
