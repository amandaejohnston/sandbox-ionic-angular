import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  // TODO: setTimeout is needed to overcome Ionic's async initialization in the router
  // we'll probably want to revisit to figure out if we can fix it on the Ionic side
  // but this works for now
  ngAfterViewInit() {
    setTimeout(() => {
      register();
      this.swiperRef?.nativeElement.initialize();
    }, 0);
  }
}
