import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartState, CartStore } from './cart.store';
import { Book } from '@office/books';


@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

  selectCart$: Observable<Book[]> = this.select('items');
  selectNumOfItemsInCart$: Observable<number> = this.selectCart$.pipe(
    map((cart: Book[]) => cart.length)
  );
  constructor(protected override store: CartStore) {
    super(store);
  }
}