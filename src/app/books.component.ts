import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book';
import { Reservation } from  './reservation';

@Component({
  selector: 'booksList',
  templateUrl: 'app/templates/listRepeater.html',
  styles: [`
    table{
        display: inline-block;
        height: 50vh;
        overflow-Y: scroll;
        color: #585859;
        margin: 1em auto;
    }
    td{
        line-height: 36px;
        background-color: #a6c38e;
        margin: 1em;
        width: 30%;
        font-weight: 600;
        list-style: none;
    }
    td.bookIdRow{
        width: auto;
    }
    .tdButton{
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
        console.log('finished', event);
        this.onFinished.emit(event);
    }
}
