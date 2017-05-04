import { Component, Input, Output, EventEmitter } from '@angular/core';
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

    handleEventFinished(event): void {
        console.log('finished', event);
        this.onFinished.emit(event);
    }

}
