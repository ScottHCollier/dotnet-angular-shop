import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    ImageCarouselComponent,
    OrderTotalsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatBadgeModule,
    MatSelectModule,
    MatPaginatorModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatBadgeModule,
    MatSelectModule,
    MatPaginatorModule,
    PaginationHeaderComponent,
    ImageCarouselComponent,
    OrderTotalsComponent,
  ],
})
export class SharedModule {}
