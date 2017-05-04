import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'adminTable',
  templateUrl: 'app/templates/adminView.html',
  styles: [`
  div{
       position:fixed;
       top:0;
       left:0;
       width: 100vw;
       height: 100vh;
       background-color: #383839;
       color: #a6c38e;
       overflow: scroll;
   }
    table#adminTable{
        margin: 3em auto;
        overflow:scroll;
    }
  `]
  })
export class AdminTableComponent  {
    @Input() books: Book[];
    @Output() onFinished = new EventEmitter<boolean>();
    private isUpdating = -10;
    handleIsUpdating(event): void {
        console.log(event);
        this.isUpdating = event;
    }
    handleEventFinished(event): void {
        console.log('finished', event);
        this.onFinished.emit(event);
    }

}
