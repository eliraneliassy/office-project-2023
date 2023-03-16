import { BooksService } from './../../../../libs/book/src/lib/book/books.service';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Book } from '@office/books';

@Component({
  selector: 'officeproject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  books$?: Observable<Book[]>;

  constructor(private booksService: BooksService) {

  }
  ngOnInit(): void {
    this.books$ = this.booksService.getBooks('Angular');
  }
}
