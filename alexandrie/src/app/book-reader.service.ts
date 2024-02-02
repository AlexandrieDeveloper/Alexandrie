import { Injectable } from '@angular/core';
import { Book } from './library/library.page';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookReaderService {

  constructor() { }
  
  private bookSelectedSubject = new Subject<Book>();
  bookSelected$ = this.bookSelectedSubject.asObservable();

  selectBook(book: Book) {
    this.bookSelectedSubject.next(book);
  }
}
