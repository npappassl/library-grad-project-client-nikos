import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation';
@Component({
    selector: 'reserve-button',
    template: `<button md-raised-button [disabled]="isReserved" (click)="sendReservation()">Reserve</button>`,
    providers: [ReservationService],
    styles: [`
        div{
            color: black;
            background-color: lightgray;

        }`, `
        div:hover{
            filter: invert(1);
        }
    `]
})
export class ReserveButtonComponent {
    @Input() bookId: number;
    @Input() isReserved: boolean;
    @Output() onFinished = new EventEmitter<boolean>();

    constructor(private resService: ReservationService) {}
    sendReservation() {
        this.resService.postNewReservation(new Reservation(null, this.bookId, Date.now().toString())).subscribe(
            (reserv) => this.onFinished.emit(true),
            (err) => alert(err)
        );
    }
}
