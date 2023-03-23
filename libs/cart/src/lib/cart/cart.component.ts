import { CartService } from './../cart.service';
import { Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '@office/books';

@Component({
  selector: 'ocart-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cart$?: Observable<Book[]>;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.getCart();
  }


}
