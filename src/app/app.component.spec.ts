import { AppComponent } from './app.component';
import { BooksComponent } from './components/books.component';
import { AdminStuffComponent } from './components/admin-stuff-component';
import { PostNewBookFormComponent } from './components/postNewBook.component';
import { ReserveButtonComponent } from './components/reserve-button.component';
import { DeleteButtonComponent } from './components/delete-button.component';
import { EditButtonComponent } from './components/edit-button.component';
import { AdminTableComponent } from './components/admin-table.component';


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent, BooksComponent, AdminStuffComponent,
            PostNewBookFormComponent,
            ReserveButtonComponent, DeleteButtonComponent, EditButtonComponent,
            AdminTableComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Library/i,
      '<h1> should say something about "Library"');
  });
});
