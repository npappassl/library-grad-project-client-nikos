import { Injectable } from '@angular/core';
import { Book } from 'app/book';

@Injectable()
export class BookService {
    getBooks(){
        const fetchProps = {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",//"POST,GET,PUT,PATCH,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "*"
            }
        };
        return new Promise( resolve => {
            fetch("http://localhost:51918/api/books", fetchProps).then((response) =>{
                // response.json();
                return resolve(response.json());
            });
        });
        // fetch("http://localhost:51918/api/books", fetchProps).then((response) =>{
        //     console.log(response);
        //     return response;
        // });
    );
  }
}
