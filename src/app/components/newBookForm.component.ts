import { Component, Output, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
    selector: 'new-book-form',
    template: `
        <form (ngSubmit)="onSubmit($event)" #newBookForm="ngForm">
                <label>Title</label>
                <input [value]="title" (input)="title=$event.target.value" placeholder="eg. A Draught of Sunshine" />
                <label>ISBN</label>
                <input [value]="isbn" (input)="isbn=$event.target.value" placeholder="eg. 1234567890123" minLength="10" maxlength="13"/>
                <label>Author</label>
                <input [value]="author" (input)="author=$event.target.value" placeholder="eg. John Keats"/>
                <label>PublishDate</label>
                <input type="date" [value]="publishDate" (input)="publishDate=$event.target.value" placeholder="eg. 14/10/2016"/>

            <button md-raised-button id="addNewBookButton" type="submit" [disabled]="!newBookForm.form.valid">Add</button>
        </form>
    `,
    providers: [BookService],
    styles: [`
        label{
            margin: 1em auto;
            font-weight: 500;
            font-size: 1.3em;
            color: #c1e1a6;
            display: block;
        }
        input{
            width:49%;
            border-color: #78886a;
            border-radius: 4px;
            line-height: 32px;
            box-sizing: border-box;
            margin: auto;
            display: inline-block;
            color: #383839;
            background-color: #c1e1a6;
            font-size: 1em;
            padding: 5px 5px 5px 15px;
        }
        input:active, input:focus, input:focus:hover{
            background-color: #dff;
            border-color: #ff9009;
            outline: #ff9009;
            outline-width: 2px;
        }
        input:hover{
            background-color: #d1d6c0;
            outline: #557008;
            outline-style: solid;
            outline-width: 2px;
        }
    `]
})
export class NewBookFormComponent {
    title = '';
    isbn = '';
    author = '';
    publishDate = '';
    @Output() onFinished = new EventEmitter<boolean>();
    constructor(private bookService: BookService) { }
    onSubmit(event): void {
        event.preventDefault();
        this.postNewBook();
        this.formReset();
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
            new Book(null, this.title, this.isbn, this.author, this.publishDate, null, null)
        ).subscribe(
            books => {
                this.onFinished.emit(true);
            },
            err => {
                alert(err);
            }
        );
    }

}
