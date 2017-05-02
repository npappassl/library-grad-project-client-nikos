import { Component, Input } from '@angular/core';
import { Book } from './book';
import { NgForm } from '@angular/forms';
import { BookService } from './book.service';

@Component({
  selector: 'postNewBookForm',
  providers: [BookService],
  template: `
    <div>
        <form (ngSubmit)="onSubmit($event)" #newBookForm="ngForm">
            <input [(value)]="title" (input)="title=$event.target.value" placeholder="Title"/>
            <input [value]="isbn" (input)="isbn=$event.target.value" placeholder="ISBN"/>
            <input [value]="author" (input)="author=$event.target.value" placeholder="Author"/>
            <input [value]="publishDate" (input)="publishDate=$event.target.value" placeholder="PublishDate"/>

            <button type="submit" [disabled]="!newBookForm.form.valid">Add</button>
        </form>
    </div>
  `,
  styles: [
    `
        input{
            display: block;
        }
    `
  ]
})
export class PostNewBookFormComponent {
    @Input() books: Book[];
    Id = 1;
    title: string = '';
    isbn: string = '';
    author: string = '';
    publishDate: string = '';
    constructor(private bookService: BookService) { }
    onSubmit(event): void {
        this.postNewBook();
        this.formReset();
        event.preventDefault();
    }
    formReset(): void {
        this.title = '';
        this.isbn = '';
        this.author = '';
        this.publishDate = '';
    }
    postNewBook(): void {
        console.log('spostnewBook', this.title);
        this.bookService.postNewBook(
            new Book(null, this.title, this.isbn, this.author, this.publishDate, null)
        ).subscribe(
            books => {
                this.books.length = 0;
                for (let i of books) {
                    this.books.push(i);
                }
            },
            err => {
                console.log(err);
            }
        );
    }
}
