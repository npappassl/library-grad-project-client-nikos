import { Component, OnInit} from '@angular/core';
import { BookService } from './services/book.service';
import { ReservationService } from './services/reservation.service';
import { Book } from './models/book';
import { Reservation } from './models/reservation';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  providers: [BookService, ReservationService],
  template: `
        <h1>Library</h1>
        <booksList (onFinished)="handleEventFinished($event)" [(books)]="books"></booksList>
        <postNewBookForm (onFinished)="handleEventFinished($event)"></postNewBookForm>
        <adminStuff [(books)]="books" [(reservations)]="reservations" (onFinished)="handleEventFinished($event)"></adminStuff>
    `
})
export class AppComponent implements OnInit {
    pushBooksToModel = pushBooksToModel.bind(this);
    refreshData = refreshData.bind(this);
    books: Array<Book> = new Array<Book>();
    reservations: Array<Reservation> = new Array<Reservation>();
    ngOnInit(): void {
        this.refreshData();
    }
    getReservs(): Observable<Reservation[]> {
        return this.reservService.getReservs();
    }
    getBooks(): Observable<Book[]> {
      return this.bookService.getBooks();
    }
    handleEventFinished(event) {
        this.refreshData();
    }
    constructor(
        private bookService: BookService,
        private reservService: ReservationService
    ) { }
}

function refreshData(): void {
    const self = this;
    let reservObs = self.getReservs();
    let bookObs =   self.getBooks();
    Observable.forkJoin([reservObs, bookObs])
   .subscribe((response) => {
       self.reservations = response[0];
       self.pushBooksToModel(response[1]);
   });
};

function pushBooksToModel(books: Book[]): void {
    if (this.reservations.length === 0 ) {
        setTimeout(function(){
            this.pushBooksToModelFunc(books);
        }, 1000);
        return;
    }
    this.books.length = 0;
    for (let i of books) {
        const curRes = this.reservations.filter((res) => {
            return res.BookId === i.Id;
        });
        if (curRes.length === 1) {
            i.isReserved = true;
        }else {
            i.isReserved = false;
        }
        this.books.push(i);
    }
};
