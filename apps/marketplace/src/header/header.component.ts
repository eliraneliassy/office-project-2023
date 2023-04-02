import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnDestroy } from '@angular/core';
import { CartQuery, CartService } from '@office/cart-state';

import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'officeproject-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatToolbarModule, AsyncPipe, RouterLink]
})
export class HeaderComponent {
  numberInCart$: Observable<number>;

  constructor(private cartQuery: CartQuery
  ) {
    this.numberInCart$ = this.cartQuery.selectNumOfItemsInCart$
  }


}
