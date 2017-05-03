import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
    private booksUrl: string;
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    }); // ... Set content type to JSON
    constructor(private http: Http) {
        this.booksUrl = 'http://localhost:51918/api/books';
    }
    getBooks(): Observable<Book[]> {
        const options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
         // ...using get request
         return this.http.get(this.booksUrl, options)
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res.json())
                         // ...errors if any
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    postNewBook(book: Book): Observable<Book[]> {
        const body: string = JSON.stringify(book);
        const options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
        console.log(body);
        console.log(book.Title);
        return this.http.post(this.booksUrl, body, options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
}