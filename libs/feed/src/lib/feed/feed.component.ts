import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book, BookComponent, BooksService } from '@office/books';
import { CartService } from '@office/cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'ofeed-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BookComponent, AsyncPipe, NgFor]
})
export class FeedComponent implements OnInit {
  books$?: Observable<Book[]>;

  constructor(private booksService: BooksService,
    private cartService: CartService) {

  }
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
