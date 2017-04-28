import { Component } from '@angular/core';
import { Book } from './book';
import { NgForm } from '@angular/forms';
import { BookService } from './book.service';
@Component({
  selector: 'postNewBookForm',
  providers: [BookService],
  template: `
    <div [hidden]="submitted">
        <form (ngSubmit)="onSubmit($event)" #newBookForm="ngForm">
            <input [value]="title" (input)="title=$event.target.value" placeholder="Title"/>
            <button type="submit" [disabled]="!newBookForm.form.valid">Add</button>
        </form>
    </div>
  `
})
export class PostNewBookFormComponent {
    title: string = 'd';
    Id = 1;
    submitted: boolean = false;
    constructor(private bookService: BookService) { }

    onSubmit(event): void {
        this.postNewBook();
        event.preventDefault();
        this.submitted = true;
    }

    postNewBook(): void {
        console.log('spostnewBook', this.title);
        this.bookService.postNewBook(new Book(this.Id, this.title, '', '', ''));
    }
    showChange(): void {
        console.log('showChange', this.title);
    }
}
