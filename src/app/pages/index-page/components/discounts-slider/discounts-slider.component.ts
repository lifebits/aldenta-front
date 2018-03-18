import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from '../../../../ui-elements/swiper/swiper.component';

interface Discount {
  imageUrl?: string;
  title?: string;
  text?: string;
}

@Component({
  selector: 'app-discounts-slider',
  templateUrl: './discounts-slider.component.html',
  styleUrls: ['./discounts-slider.component.scss']
})
export class DiscountsSliderComponent implements OnInit {

  discounts: Array<Discount> = [
    {
      title: 'Профессиональная консультация 200 рублей',
      imageUrl: 'assets/img/discounts/slide-1.jpg'
    }, {
      title: 'Керамическая коронка 14000 руб. под ключы',
      text: 'Установка керамических коронок под ключ за 14000 рублей до 31 марта',
      imageUrl: 'assets/img/discounts/slide-2.jpg'
    }, {
      title: 'Имплантация зубов - 40000 руб. "под ключ"',
      text: 'Имплант + формирователь + работа врача + консультация + план лечения + обследование',
      imageUrl: 'assets/img/discounts/slide-3.jpg'
    }, {
      imageUrl: 'assets/img/discounts/slide-4.jpg'
    }, {
      imageUrl: 'assets/img/discounts/slide-8.jpg'
    }, {
      title: 'Комплексная чистка зубов',
      text: 'Комплексная профессиональная чистка - 3950 рублей. Безупречная улыбка по доступной цене!',
      imageUrl: 'assets/img/discounts/slide-9.jpg'
    }
  ];

  options: SwiperOptions = {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-custom-next',
      prevEl: '.swiper-custom-prev',
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
