import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
    private booksUrl: string;
    private options: RequestOptions;
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    }); // ... Set content type to JSON
    constructor(private http: Http) {
        this.booksUrl = 'http://localhost:51918/api/books';
        this.options = new RequestOptions({ headers: this.headers }); // Create a request option
    }
    getBooks(): Observable<Book[]> {
         // ...using get request
         return this.http.get(this.booksUrl, this.options)
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res.json())
                         // ...errors if any
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    postNewBook(book: Book): Observable<Book[]> {
        const body: string = JSON.stringify(book);
        console.log(body);
        return this.http.post(this.booksUrl, body, this.options)
                    .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                    // ...errors if any
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    deleteBookRequest(id: number): Observable<Book[]> {
        const deleteUrl = this.booksUrl + '/' + id;
        return this.http.delete(deleteUrl, this.options)
                    // ...and calling .json() on the response to return data
                     .map((res: Response) => res.json())
                     // ...errors if any
                     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    updateBookRequest(book: Book): Observable<Book> {
        return this.http.put(this.booksUrl, JSON.stringify(book), this.options)
                    // ...and calling .json() on the response to return data
                     .map((res: Response) => res.json())
                     // ...errors if any
                     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
}
