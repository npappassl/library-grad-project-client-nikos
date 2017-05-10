import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
    selector: 'edit-button',
    template: `
        <button md-raised-button
            [ngClass]="{'updating': isUpdating,'free': !isUpdating}"
            (click)="handleEditButton()">
        </button>`,
    providers: [BookService],
    styles: [`
        button.free::after{
            content: "Edit";
        }
        button.updating::after{
            content: "Update";
        }
    `]
})
export class EditButtonComponent {
    @Input() book: Book;
    @Input() isUpdating: number;
    @Output() onUpdating = new EventEmitter<number>();
    @Output() onFinished = new EventEmitter<boolean>();

    constructor(private booService: BookService) {}
    handleEditButton() {
        if (this.book.isUpdating) {
            this.sendUpdateRequest();
        }
        this.book.isUpdating = !this.book.isUpdating;
        this.onUpdating.emit(null);
    }
    sendUpdateRequest() {
        this.booService.updateBookRequest(this.book).subscribe(
            (books) => this.onFinished.emit(true),
            (err) => alert(err)
        );
    }
}
