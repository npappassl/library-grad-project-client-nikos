import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  providers: [BookService],
  template:
    `
        <h1>Hello {{name}}</h1>
        <ul>
            <li *ngFor="let book of books; let i = index">
              {{ book.Title }} {{ book.Id }} {{i}}
            </li>
        </ul>
        <booksList name="{{name}}" booksS="{{books}}"></booksList>
    `
})
export class AppComponent  implements OnInit {
    books: Array<Book> = new Array<Book>(); // [new Book()];
    name = 'Angular';
    ngOnInit(): void {
        this.getBooks();
    }
    getBooks(): void {
      this.bookService.getBooks()
                        .subscribe(
                            books => this.books = books,
                            err => {
                                console.log(err);
                            });
    }
    constructor(private bookService: BookService) { }

}
