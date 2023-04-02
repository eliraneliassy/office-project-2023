import { CartQuery } from './cart.query';
import { CartService } from './../cart.service';
import { Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book, BookComponent } from '@office/books';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'ocart-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BookComponent, NgFor, AsyncPipe]
})
export class CartComponent {
  cart$?: Observable<Book[]>;

  constructor(private cartQuery: CartQuery) {
    this.cart$ = this.cartQuery.selectCart$;
  }


}
