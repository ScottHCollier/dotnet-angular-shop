import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BasketService } from '../../basket/basket.service';
import { IBasketCount } from '../../shared/models/basket';
import { IUser } from '../../shared/models/user';
import { AccountService } from '../../account/account.service';

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
  currentUser$: Observable<IUser>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.basketCount$ = this.basketService.basketCount$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }
}
