import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  swiperModules = [IonicSlides];

  test() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
}
