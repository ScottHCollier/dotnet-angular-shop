import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { TextSliderComponent } from './components/text-slider/text-slider.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    ImageCarouselComponent,
    OrderTotalsComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
    TextSliderComponent,
    FormInputComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CdkStepperModule,
    ScrollingModule,
  ],
  exports: [
    MatIconModule,
    MatProgressSpinnerModule,
    CdkStepperModule,
    BasketSummaryComponent,
    StepperComponent,
    PaginationHeaderComponent,
    ImageCarouselComponent,
    OrderTotalsComponent,
    ReactiveFormsModule,
    TextInputComponent,
    TextSliderComponent,
    FormInputComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
