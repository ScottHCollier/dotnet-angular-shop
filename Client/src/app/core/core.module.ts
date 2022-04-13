import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, SharedModule, MatToolbarModule, MatSidenavModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
