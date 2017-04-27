import { OnInit } from "@angular/OnInit";
import { Component } from '@angular/core';
import { BookService } from 'app/book.service';
import { Book } from "./book";

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
    books: Book[] = [new Book()];
    ngOnInit(): void {
        this.getBooks();
    }
    getBooks(): void {
      this.bookService.getBooks()
        .then(books => {
            this.books.length = 0;
            for(let i in books){
                console.log("books",i,books[i]);
                this.books.push(books[i]);
            }
      });
    }
    name = 'Angular';
    constructor(private bookService: BookService) { }

}
