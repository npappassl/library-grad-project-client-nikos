import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BooksComponent } from './components/books.component';
import { PostNewBookFormComponent } from './components/postNewBook.component';
import { NewBookFormComponent } from './components/newBookForm.component';

import { ReserveButtonComponent } from './components/reserve-button.component';
import { DeleteButtonComponent } from './components/delete-button.component';
import { EditButtonComponent } from './components/edit-button.component';
import { UnreserveButtonComponent } from './components/unreserve-button.component';

import { AdminStuffComponent } from './components/admin-stuff-component';
import { AdminTableComponent } from './components/admin-table.component';

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
        AppComponent, BooksComponent, AdminStuffComponent,
        PostNewBookFormComponent, NewBookFormComponent,
        ReserveButtonComponent, DeleteButtonComponent,
        EditButtonComponent, UnreserveButtonComponent,
        AdminTableComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
