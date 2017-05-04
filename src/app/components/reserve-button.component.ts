import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
@Component({
    selector: 'reserve-button',
    template: `<button md-raised-button [ngClass]="{'reserved': isReserved,'free': !isReserved}" [disabled]="isReserved" (click)="sendReservation()"></button>`,
    providers: [ReservationService],
    styles: [`
        button.free::after{
            content: "Reserve";
        }
        button.reserved::after{
            content: "Reserved";
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
