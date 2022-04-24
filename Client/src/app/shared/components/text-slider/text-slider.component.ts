import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-slider',
  templateUrl: './text-slider.component.html',
  styleUrls: ['./text-slider.component.scss'],
})
export class TextSliderComponent implements OnInit {
  @Input() slides: any[] = [
    { message: '30 day money back guarantee' },
    {
      message: 'Students now get 10% off',
      hrefText: 'Learn more',
      hrefLink: '/shop',
    },
    {
      message: "Probably don't try to buy anything from this website",
      hrefText: 'Learn more',
      hrefLink: 'http://scottcollier.io',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.slides = [
        this.slides[this.slides.length - 1],
        ...this.slides.slice(0, this.slides.length - 1),
      ];
    }, 7000);
  }
}
