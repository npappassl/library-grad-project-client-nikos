import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'my-app',
  providers: [BookService],
  template:
    `
        <h1>Hello {{name}}</h1>
        <booksList name="{{name}}" [books]="books"></booksList>
        <postNewBookForm></postNewBookForm>
    `
})
export class AppComponent  implements OnInit {
    books: Array<Book> = new Array<Book>();
    name = 'Angular';
    listId: string;
    ngOnInit(): void {
        this.getBooks();
    }
    pushBooksToModel(books: Book[]): void {
        this.books = books;
    }
    getBooks(): void {
      this.bookService.getBooks()
                        .subscribe(
                            books => this.pushBooksToModel(books),
                            err => {
                                console.log(err);
                            });
    }
    constructor(private bookService: BookService) { }
}
