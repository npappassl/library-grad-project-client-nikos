import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../book.service';
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
        button{
            opacity: 0.8;
        }
        button:hover{
            opacity:0.4;
        }
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
    @Input() index: number;
    @Input() isUpdating: number;
    @Output() onUpdating = new EventEmitter<number>();
    @Output() onFinished = new EventEmitter<boolean>();

    constructor(private booService: BookService) {}
    handleEditButton() {
        if (this.index >= 0) {
            this.isUpdating = this.index;
        } else {
            this.isUpdating = -1;
        }
        this.onUpdating.emit(this.isUpdating);
    }
    sendUpdateRequest() {
        this.booService.updateBookRequest(this.book).subscribe(
            (books) => this.onFinished.emit(true),
            (err) => alert(err)
        );
    }
}
