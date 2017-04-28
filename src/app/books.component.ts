import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'booksList',
  templateUrl: 'app/templates/listRepeater.html',
  styles: [`
    li{
        background-color: lightcyan;
        margin: 1em;
        font-weight: 600;
        color: red;
        list-style: none;
    }
  `]
})
export class BooksComponent  {
    @Input() books: Book[];
    @Input() name: string;
}
