import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BooksComponent } from './books.component';
import { PostNewBookFormComponent } from './postNewBook.component';
import { ReserveButtonComponent } from './reserve-button.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule,
        // AnimationModule,
        MaterialModule,
    ],
    declarations: [
        AppComponent, BooksComponent,
        PostNewBookFormComponent, ReserveButtonComponent,
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
