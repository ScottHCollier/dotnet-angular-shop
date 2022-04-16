import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BasketService } from '../../basket/basket.service';
import {
  IBasket,
  IBasketCount,
  IBasketTotals,
} from '../../shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  basketCount$: Observable<IBasketCount>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.basketCount$ = this.basketService.basketCount$;
  }
}
