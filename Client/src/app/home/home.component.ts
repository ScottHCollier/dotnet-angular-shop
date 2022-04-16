import { Component, OnInit } from '@angular/core';
import { ICarouselImage } from '../shared/models/carouse-images';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: ICarouselImage[] = [
    { imageSrc: '../../assets/images/hero1.jpg', imageAlt: 'image one' },
    { imageSrc: '../../assets/images/hero2.jpg', imageAlt: 'image two' },
    { imageSrc: '../../assets/images/hero3.jpg', imageAlt: 'image three' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
