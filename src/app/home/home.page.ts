import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  modules = [IonicSlides];

  // TODO: setTimeout is needed as a workaround for https://github.com/nolimits4web/swiper/issues/6473
  // due to Ionic moving the el around in the routing process
  // possibly the afterViewInit hook too?
  ngAfterViewInit() {
    setTimeout(() => {
      register();
      this.swiperRef?.nativeElement.initialize();
    }, 0);
  }
}
