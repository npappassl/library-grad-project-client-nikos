import { Component, Output, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
    selector: 'new-book-form',
    template: `
        <form #newBookForm="ngForm" (ngSubmit)="onSubmit(newBookForm)">
                 <label for="Title">Title</label>
                 <input name="Title" placeholder="eg. A Draught of Sunshine" [(ngModel)]="book.Title" #Title="ngModel" required/>

                <label for="ISBN">ISBN</label>
                <input type="text" id="ISBN" class="form-control"
                    placeholder="eg. 1234567890123"
                    required minlength="10" maxlength="13"
                    name="ISBN" [(ngModel)]="book.ISBN"
                    #ISBN="ngModel"/>
                <div *ngIf="ISBN.errors">
                    <div [hidden]="!ISBN.errors.required">
                      Name is required
                    </div>
                    <div [hidden]="!ISBN.errors.minlength">
                        ISBN must be defined as a value of either 10 or 13 integers.                    </div>
                    <div [hidden]="!ISBN.errors.maxlength">
                        ISBN must be defined as a value of either 10 or 13 integers.                    </div>
                </div>
                <label for="Author">Author</label>
                <input name="Author" placeholder="eg. John Keats" [(ngModel)]="book.Author" #Author="ngModel" required/>

                <label for="PublishDate">PublishDate</label>
                <input type="date" name="PublishDate" placeholder="eg. 14/10/2016" ngModel />

            <button md-raised-button id="addNewBookButton" type="submit" [disabled]="!newBookForm.form.valid||ISBN.errors">Add</button>
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
    book = new Book(null, null, null, null, null, null, null);
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
