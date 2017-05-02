import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { BooksComponent } from './books.component';
import { PostNewBookFormComponent } from './postNewBook.component';
import { ReserveButtonComponent } from './reserve-button.component';

@NgModule({
    imports: [
        BrowserModule, HttpModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        AppComponent, BooksComponent,
        PostNewBookFormComponent, ReserveButtonComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
