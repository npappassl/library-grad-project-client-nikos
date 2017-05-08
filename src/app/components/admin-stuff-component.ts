import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'adminStuff',
  template: `
    <div id="doAdminStuffButton" class=pageButtonReveal>
        <h2 class="clickable" (click)="doingAdminStuff = !doingAdminStuff;"> Do Admin stuff</h2>
        <div class="adminStuffDiv" *ngIf="doingAdminStuff">
            <adminTable *ngIf="userIsSure === true" [(books)]="books" [(reservations)]="reservations"
                (onFinished)="handleEventFinished($event)"></adminTable>
            <div *ngIf="userIsSure === undefined" class="questionDiv">
                <span class="question">
                    Are you sure you want to mess with the database?<br/>
                </span>
                <span class="subquestion">
                    (it might have consequences)
                </span>
                <span class="yes clickable" (click)="userIsSure = true;">yes</span>
                <span class="no clickable" (click)="doingAdminStuff = false;">no</span>
            </div>
            <h2 class="clickable" (click)="doingAdminStuff = !doingAdminStuff;"> Do Admin stuff</h2>
            <span id="closeAdmin" class="clickable" (click)="doingAdminStuff = false;">x</span>
        </div>
    </div>
  `,
  styles: [`
      div.adminStuffDiv{
           position:fixed;
           display: flex;
           top:0;
           left:0;
           width: 100%;
           height: 100%;
           background-color: #383839;
           color: #a6c38e;
       }
       #doAdminStuffButton{
         background-color: #ff9009;
         color: #383839;
       }
       #closeAdmin{
           position: fixed;
           font-size: 1.5em;
           right: 2em;
           top: 1em;
       }
       .questionDiv{
           display: block;
           width: 100%;
           margin: 25% auto;
       }
       .question{
           font-size: 1.6em;
       }
       .subquestion, .question{
           display: block;
       }
       .yes, .no{
           display: inline-block;
           font-size: 2em;
           margin: 1em 1em;
           padding-left: 15px;
           padding-bottom: 4px;
           padding-right: 15px;
           border-radius: 3px;
           transition: all .4s ease;
       }
       .yes:hover, .no:hover{
           background-color: rgba(255, 144, 9, .55);
       }
  `]
  })
export class AdminStuffComponent  {
    @Input() books: Book[];
    @Input() reservations: Reservation[];
    @Output() onFinished = new EventEmitter<boolean>();
    userIsSure: boolean;
    doingAdminStuff = false;
    handleEventFinished(event): void {
        console.log('finished', event);
        this.onFinished.emit(event);
    }

}
