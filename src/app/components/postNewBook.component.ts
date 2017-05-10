import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'postNewBookForm',
  template: `
    <div id="addNewBookDiv" class="pageButtonReveal">
        <h2 class="clickable" id="postingBookH2" (click)="postingBook = !postingBook;" >Add a new Book</h2>
        <new-book-form *ngIf="postingBook" (onFinished)="handleEventFinished($event)"></new-book-form>
    </div>
  `,
  styles: [`
        div{
            background-color: #585859;
            display: block;
            margin: 1em auto;
            padding: 0.5em 1em 1em 1em;
        }
        #postingBookH2{
            color: #FF9009;
        }
    `]
})
export class PostNewBookFormComponent {
    postingBook = false;
    @Output() onFinished = new EventEmitter<boolean>();
    handleEventFinished() {
        this.onFinished.emit(true);
    }
}
