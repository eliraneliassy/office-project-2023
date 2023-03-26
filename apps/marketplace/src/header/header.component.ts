
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnDestroy } from '@angular/core';
import { CartQuery, CartService } from '@office/cart';

import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'officeproject-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  numberInCart$: Observable<number>;

  constructor(private cartQuery: CartQuery
  ) {
    this.numberInCart$ = this.cartQuery.selectNumOfItemsInCart$
  }


}
