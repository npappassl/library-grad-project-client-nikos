import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from './reservation';

@Component({
    selector: 'reserve-button',
    template: `<div (click)="sendReservation()">Reserve<div>`,
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
    @Output() onFinished = new EventEmitter<boolean>();

    constructor(private resService: ReservationService) {}
    sendReservation() {
        this.resService.postNewReservation(new Reservation(null, this.bookId, Date.now().toString())).subscribe(
            (reserv) => this.onFinished.emit(true),
            (err) => console.log(err)
        );
    }
}
