import { Component, OnInit} from '@angular/core';
import { BookService } from './services/book.service';
import { ReservationService } from './services/reservation.service';
import { Book } from './models/book';
import { Reservation } from './models/reservation';

const pushBooksToModelConst = pushBooksToModelFunc;


@Component({
  selector: 'my-app',
  providers: [BookService, ReservationService],
  template:`
        <h1>Library</h1>
        <booksList (onFinished)="handleEventFinished($event)" [(books)]="books"></booksList>
        <postNewBookForm (onFinished)="handleEventFinished($event)" [(books)]="books"></postNewBookForm>
        <adminStuff [(books)]="books" (onFinished)="handleEventFinished($event)"></adminStuff>
    `
})
export class AppComponent  implements OnInit {
    pushBooksToModel = pushBooksToModelConst.bind(this);
    books: Array<Book> = new Array<Book>();
    reservations: Array<Reservation> = new Array<Reservation>();
    ngOnInit(): void {
        this.getReservs();
        this.getBooks();
    }
    getReservs(): void {
        this.reservService.getReservs().subscribe(
            reservs => {
                this.reservations = reservs;
            },
            err => {
                console.log(err);
            }
        );
    }
    getBooks(): void {
      this.bookService.getBooks()
                        .subscribe(
                            books => {
                                this.pushBooksToModel(books);
                            },
                            err => {
                                console.log(err);
                            });
    }
    handleEventFinished(event) {
        console.log(event);
        this.getReservs();
        this.getBooks();
    }
    constructor(
        private bookService: BookService,
        private reservService: ReservationService
    ) { }
}

function pushBooksToModelFunc(books: Book[]): void {
    if (this.reservations.length === 0 ) {
        setTimeout(function(){
            this.pushBooksToModel(books);
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
