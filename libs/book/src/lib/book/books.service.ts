import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '@office/books';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  constructor(private httpClient: HttpClient) { }

  getBooks(term: string): Observable<Book[]> {
    let params: HttpParams = new HttpParams();

    params = params.append('q', term);
    return this.httpClient.get<any>(this.BASE_URL, { params })
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          price: item.volumeInfo.pageCount,
          preivewImgUrl: item.volumeInfo.imageLinks.thumbnail,
          description: item.volumeInfo.description

        })))
      )
  }
}
