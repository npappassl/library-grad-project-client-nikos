import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { Reservation } from  '../models/reservation';

@Component({
  selector: 'booksList',
  templateUrl: 'app/templates/listRepeater.html',
  styles: [`
    div#tableDiv{
        overflow-Y: scroll;
        height: 50vh;
        border: 1px rgba(88,88,89,.7) solid;
        -1px 1px 5px 1px #585859
    }
    .tableHeader{
    }
    table{
        width: 100%;
        display: inline-block;
        color: #585859;
        background-color:#deecd2;
    }
    td{
        line-height: 36px;
        margin: 1em;
        width: 25%;
        font-weight: 600;
        list-style: none;
    }
    .even{
        background-color: #a6c38e;
    }
    .odd{
        background-color: #C1E1A6;
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
