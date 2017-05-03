import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Reservation } from './reservation';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReservationService {
    private reservUrl: string;
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    }); // ... Set content type to JSON
    constructor(private http: Http) {
        this.reservUrl = 'http://localhost:51918/api/reservations';
    }
    getReservs(): Observable<Reservation[]> {
        const options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
         // ...using get request
         return this.http.get(this.reservUrl, options)
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res.json())
                         // ...errors if any
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
    postNewReservation(reserv: Reservation): Observable<Reservation[]> {
        console.log(reserv);
        const body: string = JSON.stringify(reserv);
        const options: RequestOptions = new RequestOptions({ headers: this.headers }); // Create a request option
        console.log(body);
        return this.http.post(this.reservUrl, body, options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    };
}
