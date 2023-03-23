
import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book, BooksService } from '@office/books';

@Component({
  selector: 'officeproject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  books$?: Observable<Book[]>;

  constructor(private booksService: BooksService) {

  }
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
  }
}
