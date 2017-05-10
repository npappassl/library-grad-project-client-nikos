import { Component, Output, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
    selector: 'new-book-form',
    template: `
        <form (ngSubmit)="onSubmit(newBookForm)" #newBookForm="ngForm">
                <label>Title</label>
                <input  name="Title" placeholder="eg. A Draught of Sunshine" ngModel required/>

                <label>ISBN</label>
                <input name="ISBN" placeholder="eg. 1234567890123" minLength="10" maxlength="13" ngModel/>

                <label>Author</label>
                <input name="Author" placeholder="eg. John Keats" ngModel required/>

                <label>PublishDate</label>
                <input type="date" name="PublishDate" placeholder="eg. 14/10/2016" ngModel />

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
        #addNewBookButton{
          margin: 2em auto;
          margin-bottom: 1em;
          display: block;
      }
    `]
})
export class NewBookFormComponent {
    @Output() onFinished = new EventEmitter<boolean>();
    constructor(private bookService: BookService) { }
    onSubmit(form: any): void {
        this.postNewBook(form.value);
        form.reset();
    }
    postNewBook(formValue: any): void {
        this.bookService.postNewBook(
            new Book(null, formValue.Title, formValue.ISBN, formValue.Author, formValue.PublishDate, null, null)
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
