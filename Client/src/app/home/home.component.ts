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
        'https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'image one',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1578269174279-27814d45033f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      imageAlt: 'image two',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1550246140-705098470d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imageAlt: 'image three',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
