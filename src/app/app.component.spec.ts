import { AppComponent } from './app.component';
import { BooksComponent } from './components/books.component';
import { AdminStuffComponent } from './components/admin-stuff-component';
import { PostNewBookFormComponent } from './components/postNewBook.component';
import { NewBookFormComponent } from './components/newBookForm.component';
import { ReserveButtonComponent } from './components/reserve-button.component';
import { UnreserveButtonComponent } from './components/unreserve-button.component';

import { DeleteButtonComponent } from './components/delete-button.component';
import { EditButtonComponent } from './components/edit-button.component';
import { AdminTableComponent } from './components/admin-table.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titles: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
            FormsModule, ReactiveFormsModule
        ],
        declarations: [
            AppComponent, BooksComponent, AdminStuffComponent,
            PostNewBookFormComponent, NewBookFormComponent,
            ReserveButtonComponent, DeleteButtonComponent,
            EditButtonComponent, UnreserveButtonComponent,
            AdminTableComponent
        ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    titles = fixture.debugElement.query(By.css('h2'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Library/i,
      '<h1> should say something about "Library"');
  });
  // my custom tests
  it('should load two button h2', () => expect(titles).toBeDefined() );

  it('should have expected <h2> text', () => {
    const h2 = document.getElementsByTagName('h2');
    expect(h2[0].innerText).toMatch(/add/i,
      '<h2> Add a new Book');
    expect(h2[1].innerText).toMatch(/admin/i,
      '<h2> Do Admin Stuff');

  });

});
