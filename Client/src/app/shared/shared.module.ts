import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    ImageCarouselComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    CdkStepperModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    CdkStepperModule,
    BasketSummaryComponent,
    StepperComponent,
    PaginationHeaderComponent,
    ImageCarouselComponent,
    OrderTotalsComponent,
    ReactiveFormsModule,
    TextInputComponent,
  ],
})
export class SharedModule {}
