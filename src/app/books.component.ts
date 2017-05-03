import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book';
import { Reservation } from  './reservation';

@Component({
  selector: 'booksList',
  templateUrl: 'app/templates/listRepeater.html',
  styles: [`
    table{
        display: block;
        height: 50vh;
        overflow: scroll;

    }
    td{
        background-color: #d3d3d4;
        margin: 1em;
        width: 30%;
        font-weight: 600;
        color: red;
        list-style: none;
    }
    td.bookIdRow{
        width: auto;
    }
  `]
})
export class BooksComponent  {
    @Input() books: Book[];
    @Input() reservations: Reservation[];
    @Input() name: string;
    @Output() onFinished = new EventEmitter<boolean>();
    handleEventFinished(event): void {
        console.log("finished", event);
        this.onFinished.emit(event);
    }
}
