import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Book } from './book';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {
    private booksUrl: string;
    constructor(private http: Http) {
        this.booksUrl = 'http://localhost:51918/api/books';
    }
    getBooks(): Observable<Book[]> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*', // "POST,GET,PUT,PATCH,DELETE,OPTIONS",
            'Access-Control-Allow-Headers': '*'
        }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

         // ...using get request
         return this.http.get(this.booksUrl, options)
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res.json())
                         // ...errors if any
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
// ======================================================================
         // const fetchProps = {
         //     method: 'GET',
         //     mode: 'cors',
         //     headers: {
         //         'Content-Type': 'application/json',
         //         'Access-Control-Allow-Origin': '*',
         //         'Access-Control-Allow-Methods': '*', // "POST,GET,PUT,PATCH,DELETE,OPTIONS",
         //         'Access-Control-Allow-Headers': '*'
         //     }
         // };

// ===============================================
        // return new Promise( resolve => {
        //     fetch(booksUrl, fetchProps).then((response: Response) => {
        //         return resolve(response.json());
        //     });
        // });
}
