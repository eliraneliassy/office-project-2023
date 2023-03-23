import { Injectable } from '@angular/core';
import { Book } from '@office/books';
import { BehaviorSubject, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  getCart(): Observable<Book[]> {
    return this.cart$.asObservable();
  }

  getCartSnapshot() {
    return this.cart$.getValue();
  }

  setCart(cart: Book[]) {
    this.cart$.next(cart);
  }

  addToCart(book: Book): void {
    const currentCart = this.getCartSnapshot();
    const newCart = [...currentCart, book];
    
    this.setCart(newCart);
  }

  removeFromCart(book: Book) {

    const currentCart = this.getCartSnapshot();
    const index = currentCart.findIndex(b => b.id === book.id);
    if (index > -1) {
      currentCart.splice(index, 1);
      this.setCart(currentCart);
    }

    
  }

  resetCart() {
    this.setCart([])
  }

  getNumberOfItemsInCart(): Observable<number>{
    return this.getCart().pipe(
      map((cart: Book[]) => cart.length)
    )
  }
}
