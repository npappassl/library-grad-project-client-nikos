import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'adminStuff',
  template: `
    <h2 (click)="doingAdminStuff = !doingAdminStuff;"> Do Admin stuff</h2>
    <div *ngIf="doingAdminStuff">
        <h2 (click)="doingAdminStuff = !doingAdminStuff;"> Do Admin stuff</h2>
        am I doing am idoing??
        <adminTable [(books)]="books" (onFinished)="handleEventFinished($event)"></adminTable>
    </div>
  `,
  styles: [`
  div{
       position:fixed;
       top:0;
       left:0;
       width: 100vw;
       height: 100vh;
       background-color: #383839;
       color: #a6c38e;
   }

  `]
  })
export class AdminStuffComponent  {
    @Input() books: Book[];
    @Output() onFinished = new EventEmitter<boolean>();
    handleEventFinished(event): void {
        console.log('finished', event);
        this.onFinished.emit(event);
    }

    doingAdminStuff = false;
}
