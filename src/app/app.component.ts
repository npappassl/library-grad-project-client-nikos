import { Component, OnInit} from '@angular/core';
import { BookService } from './book.service';
import { ReservationService } from './reservation.service';
import { Book } from './book';
import { Reservation } from './reservation';
@Component({
  selector: 'my-app',
  providers: [BookService, ReservationService],
  template:
    `
        <h1>Library</h1>
        <booksList (onFinished)="handleEventFinished($event)" [(books)]="books"></booksList>
        <postNewBookForm [(books)]="books"></postNewBookForm>
    `
})
export class AppComponent  implements OnInit {
    books: Array<Book> = new Array<Book>();
    reservations: Array<Reservation> = new Array<Reservation>();
    ngOnInit(): void {
        this.getReservs();
        this.getBooks();
    }
    pushBooksToModel(books: Book[]): void {
        if (this.reservations.length === 0 ) {
            setTimeout(function(){
                this.pushBooksToModel(books);
            }, 1000);
            return;
        }
        this.books.length = 0;
        for (let i of books) {
            const curRes = this.reservations.filter((res) => {
                console.log(res.BookId, i.Id);
                return res.BookId === i.Id;
            });
            console.log("curREs", curRes);
            if (curRes.length === 1) {
                i.isReserved = true;
            }else {
                i.isReserved = false;
            }
            this.books.push(i);
        }
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
