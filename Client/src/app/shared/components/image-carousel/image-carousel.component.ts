import { Component, Input, OnInit } from '@angular/core';
import { ICarouselImage } from '../../models/carouse-images';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent implements OnInit {
  @Input() images: ICarouselImage[] = [];
  @Input() pagination: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoplay: boolean = false;
  @Input() interval: number = 3000;
  @Input() height: string;

  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.autoplay) {
      this.autoplayCarousel();
    }
  }

  autoplayCarousel(): void {
    setInterval(() => {
      this.nextImage();
    }, this.interval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  previousImage() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  nextImage() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
