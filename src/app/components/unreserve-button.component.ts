import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation';
import { Book } from '../models/book';

@Component({
    selector: 'unreserve-button',
    template: `
        <button md-raised-button
            [ngClass]="{'reserved': book.isReserved,'free': !book.isReserved}"
            [disabled]="!book.isReserved" (click)="sendDeleteReservation()">
        </button>
    `,
    providers: [ReservationService],
    styles: [`
        button.free::after{
            content: "Free";
        }
        button.reserved::after{
            content: "Unreserve";
        }
    `]
})
export class UnreserveButtonComponent {
    @Input() book: Book;
    @Input() reservations: Reservation[];
    @Output() onFinished = new EventEmitter<boolean>();

    constructor(private resService: ReservationService) {}
    sendDeleteReservation() {
        this.reservations.map((reserv) => {
            if (reserv.BookId === this.book.Id) {
                this.resService.deleteReservation( reserv.Id ).subscribe(
                    (reservations) => this.onFinished.emit(true),
                    (err) => alert(err)
                );
            }
        });
    }
}
