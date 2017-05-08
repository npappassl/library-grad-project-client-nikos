import { AppComponent } from '../app.component';
import { BooksComponent } from './books.component';
import { AdminStuffComponent } from './admin-stuff-component';
import { PostNewBookFormComponent } from './postNewBook.component';
import { ReserveButtonComponent } from './reserve-button.component';
import { UnreserveButtonComponent } from './unreserve-button.component';
import { DeleteButtonComponent } from './delete-button.component';
import { EditButtonComponent } from './edit-button.component';
import { AdminTableComponent } from './admin-table.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('PostNewBookFormComponent', function () {
  let de: DebugElement;
  let comp: PostNewBookFormComponent;
  let fixture: ComponentFixture<PostNewBookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule,
            FormsModule, ReactiveFormsModule
        ],
        declarations: [
            AppComponent, BooksComponent, AdminStuffComponent,
            PostNewBookFormComponent,
            ReserveButtonComponent, DeleteButtonComponent,
            EditButtonComponent, UnreserveButtonComponent,
            AdminTableComponent
        ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewBookFormComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    const h2 = de.nativeElement;
    expect(h2.innerText).toMatch(/book/i,
      '<h1> should say something about "Book"');
  });

});
