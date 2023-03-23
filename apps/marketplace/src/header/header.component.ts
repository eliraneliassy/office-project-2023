import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnDestroy } from '@angular/core';
import { CartService } from '@office/cart';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'officeproject-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  numberInCart$: Observable<number>;

  constructor(private cartService: CartService,
  ) {
    this.numberInCart$ = this.cartService.getNumberOfItemsInCart()
  }


}
