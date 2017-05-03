import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book';
import { NgForm } from '@angular/forms';
import { BookService } from './book.service';

@Component({
  selector: 'postNewBookForm',
  providers: [BookService],
  template: `
    <div id="addNewBookDiv">
        <h2>Add a new Book</h2>
        <form (ngSubmit)="onSubmit($event)" #newBookForm="ngForm">
            <md-input-container>
                <label>Title</label>
                <input md-ripple [(value)]="title" (input)="title=$event.target.value" placeholder="Title" />
            </md-input-container>
            <md-input-container>
                <label>ISBN</label>
                <input [value]="isbn" (input)="isbn=$event.target.value" placeholder="ISBN"/>
            </md-input-container>
            <md-input-container>
                <label>Author</label>
                <input md-input [value]="author" (input)="author=$event.target.value" placeholder="Author"/>
            </md-input-container>
            <md-input-container>
                <label>PublishDate</label>
                <input md-input [value]="publishDate" (input)="publishDate=$event.target.value" placeholder="eg. 14/10/2016"/>
            </md-input-container>
            <button md-button type="submit" [disabled]="!newBookForm.form.valid">Add</button>
        </form>
    </div>
  `,
  styles: [
    `
        div{
            background-color: #585859;
            width: 100%;
            display:block;
            min-height: 30vh;
        }
        form{
            margin: 1em auto;
        }
        label{
            font-weight: 500;
            color: #c1e1a6;
        }
        md-input-container{
            box-sizing:border-box;
            width:49%;
            display:inline-block;
        }
        input{
            margin: auto;
            display: block;
            width:50%;
            color: white;
            background-color: #c1e1a6;
        }
        input:active,input:focus{
            background-color: #dff;
        }
        input:hover{
            background-color: #d1d6c0;
        }
    `
  ]
})
export class PostNewBookFormComponent {
    @Input() books: Book[];
    @Output() onFinished = new EventEmitter<boolean>();
    Id = 1;
    title = '';
    isbn = '';
    author = '';
    publishDate = '';
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
                this.onFinished.emit(true);
            },
            err => {
                alert(err);
            }
        );
    }
}
