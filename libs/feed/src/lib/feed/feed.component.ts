import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book, BooksService } from '@office/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'ofeed-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  books$?: Observable<Book[]>;

  constructor(private booksService: BooksService) {

  }
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
  }
}
