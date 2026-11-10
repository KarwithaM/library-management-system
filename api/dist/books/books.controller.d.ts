import { BooksService } from "./books.service";
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<({
        genre: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
        userId: number | null;
    })[]>;
}
