import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'booksList',
  templateUrl: 'app/templates/listRepeater.html',
})
export class BooksComponent  {
    @Input() booksS: Book[];
    @Input() name: string;
    // = [
    // {
    //     title:"the best Book",
    //     ISBN:"231230198230192803"
    // },
    // {
    //     title:"the best Book 2",
    //     ISBN:"231230198230192803"
    // }];
}
