export class Book {
    constructor(
        public Id: number,
        public Title: string,
        public ISBN: string,
        public Author: string,
        public PublishDate: string,
        public isReserved: boolean,
    ) { }
}
