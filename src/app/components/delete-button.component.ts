import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
    selector: 'delete-button',
    template: `
        <button md-raised-button [ngClass]="{'reserved': isReserved,'free': !isReserved}"
            [disabled]="isReserved" (click)="sendDeleteRequest()">
        </button>
    `,
    providers: [BookService],
    styles: [`
        button.free::after{
            content: "Delete";
        }
        button.reserved::after{
            content: "Reserved";
        }
    `]
})
export class DeleteButtonComponent {
    @Input() bookId: number;
    @Input() isReserved: boolean;
    @Output() onFinished = new EventEmitter<boolean>();

    constructor(private booService: BookService) {}
    sendDeleteRequest() {
        this.booService.deleteBookRequest(this.bookId).subscribe(
            (books) => this.onFinished.emit(true),
            (err) => alert(err)
        );
    }
}
