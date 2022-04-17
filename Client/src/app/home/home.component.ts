import { Component, OnInit } from '@angular/core';
import { ICarouselImage } from '../shared/models/carouse-images';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: ICarouselImage[] = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1597824583262-90e3153a21eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'image one',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1587118889075-596cd291a877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      imageAlt: 'image two',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1627483262799-8dc2f565cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'image three',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
