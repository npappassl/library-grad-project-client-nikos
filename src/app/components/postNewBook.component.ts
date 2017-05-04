import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'postNewBookForm',
  providers: [BookService],
  template: `
    <div id="addNewBookDiv">
        <h2 (click)="postingBook = !postingBook;" >Add a new Book</h2>
        <form *ngIf="postingBook" (ngSubmit)="onSubmit($event)" #newBookForm="ngForm">
                <label>Title</label>
                <input [value]="title" (input)="title=$event.target.value" placeholder="eg. A Draught of Sunshine" />
                <label>ISBN</label>
                <input [value]="isbn" (input)="isbn=$event.target.value" placeholder="eg. 1234567890123" minLength="10" maxlength="13"/>
                <label>Author</label>
                <input [value]="author" (input)="author=$event.target.value" placeholder="eg. John Keats"/>
                <label>PublishDate</label>
                <input [value]="publishDate" (input)="publishDate=$event.target.value" placeholder="eg. 14/10/2016"/>

            <button md-raised-button id="addNewBookButton" type="submit" [disabled]="!newBookForm.form.valid">Add</button>
        </form>
    </div>
  `,
  styles: [
    `
        div{
            background-color: #585859;
            display: block;
            margin: 1em auto;
            padding: 0.5em 1em 1em 1em;
        }
        label{
            margin: 1em auto;
            font-weight: 500;
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
        }
        input:active, input:focus{
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
        #addNewBookButton{
            margin: 2em auto;
            margin-bottom: 1em;
            display: block;
        }
    `
  ]
})
export class PostNewBookFormComponent {
    @Input() books: Book[];
    @Output() onFinished = new EventEmitter<boolean>();
    postingBook = false;
    Id = 1;
    title = '';
    isbn = '';
    author = '';
    publishDate = '';
    constructor(private bookService: BookService) { }
    onSubmit(event): void {
        this.postNewBook();
        event.preventDefault();
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
            new Book(null, this.title, this.isbn, this.author, this.publishDate, null)
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
