import { Store } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, Observable, of, map } from 'rxjs';
import { CartState, CartStore } from './cart.store';
import { CartQuery } from './cart.query';


@Injectable({
  providedIn: 'platform'
})
export class CartService {

  constructor(
    private cartStore: CartStore,
    private cartQuery: CartQuery) { }

  addToCart(book: Book): void {
    this.cartStore.update((currentCartState: CartState) => ({
      ...currentCartState, items: [...currentCartState.items, book]
    }))

  }

  removeFromCart(book: Book) {

    this.cartStore.update((currentCartState: CartState) => {
      const index = currentCartState.items.findIndex(b => b.id === book.id);
      let newCart: Book[] = [];
      if (index > -1) {
        newCart = currentCartState.items.filter(b => b.id !== book.id);
        return { items: newCart };
      }

      return { ...currentCartState };


    })

  }

  resetCart() {
    this.cartStore.update((currentCartSate: CartState) => ({ ...currentCartSate, items: [] }))
  }


}
