import { Component, ViewChild } from '@angular/core';
import { IonFab } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('fab') fab: IonFab;
  showFab = false;
  showFabRaf = false;

  constructor() {}

  toggleActivated() {
    this.fab.activated = !this.fab.activated;
  }

  toggleShowFab() {
    this.showFab = !this.showFab;
  }

  toggleShowFabRaf() {
    requestAnimationFrame(() => this.showFabRaf = !this.showFabRaf);
  }
}
